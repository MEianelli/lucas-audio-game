import { COOKIE_NAME } from "@/lib/contants";
import { decryptData, encryptData } from "./crypto";

export function getCookieValueByName(param: string = COOKIE_NAME) {
  if (typeof window === "undefined") return "";
  if (!document) return "";
  const match = document.cookie.match(new RegExp("(^| )" + param + "=([^;]+)"));
  return match ? match[2] : "";
}

export function setCookie(value: string, param: string = COOKIE_NAME) {
  if (typeof window === "undefined") return;
  if (!document) return;
  if (value) {
    document.cookie = `${param}=${value}; expires=Fri, 31 Dec 2050 23:59:59 GMT; path=/; SameSite=Lax;`;
  }
}

export function deleteCookie(param: string = COOKIE_NAME) {
  if (typeof window === "undefined") return;
  if (!document) return;
  document.cookie = `${param}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
}

export function setCryptoCookie(data: Record<string, string>) {
  if (!Object.keys(data).length) {
    return;
  }

  const encryptedData = encryptData(data);
  setCookie(encryptedData);
}

export function getCryptoCookie() {
  const data = getCookieValueByName();
  if (!data) return data;
  const decryptedData = decryptData(data);
  return JSON.parse(decryptedData);
}

export function parseCookies(
  cookieString: string | undefined
): Record<string, string> {
  if (!cookieString) return {};

  return cookieString
    .split(";")
    .reduce((cookies: Record<string, string>, cookie: string) => {
      const [name, value] = cookie.split("=").map((c) => c.trim());
      cookies[name] = decodeURIComponent(value);
      return cookies;
    }, {});
}
