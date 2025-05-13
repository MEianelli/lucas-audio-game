import { ButtonAllUse } from "@/components/buttons/BlurButton/ButtonAllUse";
import { FlexR } from "@/components/containers/flex";
import { Heart } from "@/components/icons/heart";

export function GetMoreLifes() {
  return (
    <FlexR css={{ gap: "10px" }}>
      <Heart size={"50px"} variant="dark" />
      <ButtonAllUse title="Get More Lifes" onclick={() => {}} css={{ fontSize: "20px" }} size={"50px"} />
    </FlexR>
  );
}
