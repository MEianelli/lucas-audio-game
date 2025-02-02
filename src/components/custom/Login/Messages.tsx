import { FlexC } from "@/components/containers/flex";
import { WarningIcon } from "@/components/icons/warning";
import { Text, TextWarning } from "@/components/text/text";

export function Warning({ text }: { readonly text: string }) {
  return (
    <TextWarning css={{ lineHeight: "20px" }}>
      <WarningIcon />
      {text}
    </TextWarning>
  );
}

export function TextMessage({ text }: { readonly text: string }) {
  return (
    <FlexC css={{ gap: 8 }}>
      <Text
        color={"text"}
        size={"b"}
        css={{ marginBottom: 8, fontFamily: "$sans", fontWeight: 700 }}
      >
        {text}
      </Text>
    </FlexC>
  );
}
