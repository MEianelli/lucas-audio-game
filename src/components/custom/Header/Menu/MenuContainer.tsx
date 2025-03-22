import { FlexC } from "@/components/containers/flex";
import { Logout } from "./Logout";
import { Text } from "@/components/text/text";
import { DeleteAccount } from "./DeleteAccount";
import { ContactUs } from "./ContactUs";
import { GoHome } from "./GoHome";

export function MenuContainer() {
  return (
    <FlexC css={{ gap: 6, width: "100%" }}>
      <Text
        css={{
          fontSize: "28px",
          color: "$purple",
          fontWeight: 700,
          marginBottom: "16px",
        }}
      >
        Menu
      </Text>
      <GoHome />
      <Logout />
      <ContactUs />
      <DeleteAccount />
    </FlexC>
  );
}
