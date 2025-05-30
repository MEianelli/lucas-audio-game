import { FlexC } from "@/components/containers/flex";
import { HomeHeader } from "@/components/custom/Header/Header";
import { LoginContent } from "./LoginContent";

export const LoginPage = () => {
  return (
    <FlexC css={{ gap: 18 }}>
      <HomeHeader />
      <LoginContent />
    </FlexC>
  );
};
