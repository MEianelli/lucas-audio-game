import { FlexC } from "@/components/containers/flex";
import { LoginContainer } from "./LoginContainer";
import { Text } from "@/components/text/text";
import { ButtonG } from "@/components/buttons/buttons";
import { useStore } from "@/lib/store";

export const LoginPage = () => {
  const setScreen = useStore((store) => store.setScreen);
  const loginState = useStore((store) => store.loginState);

  const enableBtn = loginState === "logged" || loginState === "registered";
  return (
    <FlexC css={{ gap: "32px" }}>
      <Text>AudioGuesser</Text>
      <FlexC c css={{ height: "250px" }}>
        <LoginContainer />
      </FlexC>
      <ButtonG onClick={() => setScreen("content")} disabled={!enableBtn}>
        Play
      </ButtonG>
    </FlexC>
  );
};
