import { FlexR } from "@/components/containers/flex";
import { WarningIcon } from "@/components/icons/warning";
import { IconsText } from "@/components/text/IconsText";

import { styled } from "@/styles/stitches.config";

export const TextWarningDiv = styled(FlexR, {
  background: "$purple",
  padding: "14px",
  borderRadius: 4,
  userSelect: "none",
  zIndex: 3,
  top: "22%",
  left: "50%",
  position: "absolute",
  transform: "translate(-50%, 0%)",
  gap: "8px",
});

export function Warning({ text }: { readonly text: string }) {
  return (
    <TextWarningDiv>
      <WarningIcon />
      <IconsText title={text} variant="red" css={{ fontSize: "16px", whiteSpace: "nowrap" }} />
    </TextWarningDiv>
  );
}
