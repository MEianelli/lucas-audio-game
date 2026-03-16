const ALLOWED_TAGS = new Set([
  "p",
  "a",
  "ul",
  "ol",
  "li",
  "h1",
  "h2",
  "h3",
  "h4",
  "strong",
  "em",
  "br",
]);

function isSafeHref(href: string) {
  const normalized = href.trim().toLowerCase();
  return (
    normalized.startsWith("http://") ||
    normalized.startsWith("https://") ||
    normalized.startsWith("/") ||
    normalized.startsWith("#") ||
    normalized.startsWith("mailto:")
  );
}

function cleanAttrValue(value: string) {
  return value.replace(/^['"]|['"]$/g, "").trim();
}

function sanitizeAnchorAttributes(attrs: string) {
  let href = "";
  let title = "";
  let target = "";
  let rel = "";

  const attrRegex = /([a-zA-Z0-9:-]+)\s*=\s*(".*?"|'.*?'|[^\s"'=<>`]+)/g;
  let match: RegExpExecArray | null = null;

  while ((match = attrRegex.exec(attrs)) !== null) {
    const name = match[1].toLowerCase();
    const value = cleanAttrValue(match[2]);

    if (name.startsWith("on") || name === "style") {
      continue;
    }

    if (name === "href" && isSafeHref(value)) href = value;
    if (name === "title") title = value;
    if (name === "target" && (value === "_blank" || value === "_self")) target = value;
    if (name === "rel") rel = value;
  }

  if (!href) {
    return "";
  }

  const relValue = target === "_blank" ? "noopener noreferrer" : rel;
  const out: string[] = [`href="${href}"`];
  if (title) out.push(`title="${title}"`);
  if (target) out.push(`target="${target}"`);
  if (relValue) out.push(`rel="${relValue}"`);

  return ` ${out.join(" ")}`;
}

export function sanitizeSimpleHtml(raw: string) {
  if (!raw) return "";

  let sanitized = raw;

  sanitized = sanitized.replace(/<!--[\s\S]*?-->/g, "");

  sanitized = sanitized.replace(
    /<\s*(script|style|iframe|object|embed|meta|link)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi,
    ""
  );
  sanitized = sanitized.replace(/<\s*(script|style|iframe|object|embed|meta|link)[^>]*\/?\s*>/gi, "");

  sanitized = sanitized.replace(/<\s*(\/?)\s*([a-z0-9-]+)([^>]*)>/gi, (full, slash, tagName, attrs) => {
    const tag = String(tagName).toLowerCase();
    const isClosingTag = Boolean(slash);

    if (!ALLOWED_TAGS.has(tag)) {
      return "";
    }

    if (isClosingTag) {
      return `</${tag}>`;
    }

    if (tag === "br") {
      return "<br>";
    }

    if (tag === "a") {
      const safeAttrs = sanitizeAnchorAttributes(String(attrs || ""));
      if (!safeAttrs) return "";
      return `<a${safeAttrs}>`;
    }

    return `<${tag}>`;
  });

  return sanitized.trim();
}
