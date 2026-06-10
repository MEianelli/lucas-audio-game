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
      title={`©${new Date().getFullYear()} Filmguess. All rights reserved. Filmguess is an independent quiz game for entertainment purposes. Short, edited audio excerpts are used solely in a transformative quiz format; all movie titles, audio, and quotes remain the property of their respective owners. Rights holders can contact us for prompt removal.[0.06]`}
    />
  );
}
