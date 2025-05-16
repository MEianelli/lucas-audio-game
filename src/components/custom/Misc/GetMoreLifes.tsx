import { ButtonAllUse } from "@/components/buttons/BlurButton/ButtonAllUse";
import { FlexR } from "@/components/containers/flex";
import { useStore } from "@/lib/store";

export function GetMoreLifes() {
  const setLifes = useStore((s) => s.setLifes);
  return (
    <FlexR css={{ gap: "10px" }}>
      <ButtonAllUse
        title="Watch Ad to Refill Lifes"
        onclick={() => setLifes(3)}
        css={{ fontSize: "20px" }}
        size={"50px"}
      />
    </FlexR>
  );
}
