import { ButtonClean } from "@/components/buttons/buttons";
import { FlexR } from "@/components/containers/flex";
import { BlurText } from "@/components/text/BlurText";
import { useStore } from "@/lib/store";
import { deleteCookie } from "@/utils/cookie";
import { useRouter } from "next/router";
import { useState } from "react";
import { LoginContent } from "../Login/LoginContent";
import { Disclaimer } from "../Misc/Disclaimer";

export function LoginButton() {
  const router = useRouter();
  const id = useStore((s) => s.id);
  const resetStore = useStore((s) => s.resetStore);
  const [view, setView] = useState<"login" | "inputs">("login");

  function handleLogout() {
    deleteCookie();
    resetStore();
    router.push("/");
  }

  if (id) {
    return (
      <FlexR cc css={{ padding: 22 }} id="logout">
        <ButtonClean onClick={handleLogout}>
          <BlurText
            title="Logout"
            css={{ textDecoration: "underline", textUnderlineOffset: "3px", fontSize: "22px" }}
          />
        </ButtonClean>
        <Disclaimer />
      </FlexR>
    );
  }

  if (view === "inputs") {
    return (
      <FlexR
        cc
        css={{ paddingX: 22, paddingBottom: 22, backgroundColor: "$darkPurple", position: "relative" }}
        id="inputs"
      >
        <LoginContent />
      </FlexR>
    );
  }

  return (
    <FlexR cc css={{ padding: 22 }} id="botao_login">
      <ButtonClean onClick={() => setView("inputs")}>
        <BlurText
          title="Login"
          onclick={() => {}}
          css={{ textDecoration: "underline", textUnderlineOffset: "3px", fontSize: "22px" }}
        />
      </ButtonClean>
      <Disclaimer />
    </FlexR>
  );
}
