import { FlexC } from "@/components/containers/flex";
import { BuyLifes } from "./BuyLifes";
import { Logout } from "./Logout";

export function MenuContainer() {
  return (
    <FlexC css={{ gap: 16 }}>
      <Logout />
      <BuyLifes />
    </FlexC>
  );
}
