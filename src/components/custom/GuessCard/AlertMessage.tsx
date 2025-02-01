import { Text } from "@/components/text/text";

export type AlertStatus = "ok" | "nok" | "neutral";

export const AlertPoint = ({ status }: { status: AlertStatus }) => {
  if (status === "neutral") return null;
  if (status === "ok")
    return (
      <Text size={"s"} color={"green"} weight={700}>
        Acertou! +1
      </Text>
    );
  if (status === "nok")
    return (
      <Text size={"s"} color={"red"} weight={700}>
        Errou!
      </Text>
    );
};
