import { FlexC } from "@/components/containers/flex";
import { LoginContainer } from "./LoginContainer";
import { ButtonG } from "@/components/buttons/buttons";
import { useStore } from "@/lib/store";
import { useRouter } from "next/router";
import { LoginHeader } from "@/components/custom/Header/LoginHeader";

export const LoginPage = () => {
  const loginState = useStore((s) => s.loginState);
  const router = useRouter();

  const enableBtn = loginState === "logged" || loginState === "registered";
  return (
    <FlexC css={{ gap: "32px" }}>
      <LoginHeader />
      <FlexC c css={{ height: "250px" }}>
        <LoginContainer />
      </FlexC>
      <ButtonG onClick={() => router.push("/content")} disabled={!enableBtn}>
        Play
      </ButtonG>
    </FlexC>
  );
};
