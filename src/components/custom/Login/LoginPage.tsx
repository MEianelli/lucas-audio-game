import { FlexC } from "@/components/containers/flex";
import { HomeHeader } from "@/components/custom/Header/Header";
import { LoginContent } from "./LoginContent";
import { CategoriesPlay } from "../Home/CategoriesPlay";

export const LoginPage = () => {
  return (
    <FlexC css={{ gap: 18 }}>
      <HomeHeader />
      <LoginContent />
      <CategoriesPlay />
    </FlexC>
  );
};
