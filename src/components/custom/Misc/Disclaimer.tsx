import { BlurText } from "@/components/text/BlurText";

export function Disclaimer() {
  return (
    <BlurText
      css={{
        fontSize: 10,
        whiteSpace: "unset",
        width: "100%",
        padding: 10,
        fontWeight: "lighter",
        maxWidth: "$cell",
        zIndex: 1,
      }}
      title="©This game is for entertainment only. We do not own any audio, quotes, or movie references used. All rights belong to their respective owners. Requests for removal will be promptly honored.[0.04]"
    />
  );
}
