import { keyframes, styled } from "@/styles/stitches.config";
import { CSS } from "@stitches/react";
import { JSX, useEffect, useRef } from "react";
import { MenuContainer } from "../Header/Menu/MenuContainer";
import { useStore } from "@/lib/store";
import { LoginResult, RegisterResult } from "../Login/LoginResult";
import { Ranking } from "../Misc/Ranking";
import { LoginContent } from "../Login/LoginContent";
import { Finished } from "../Misc/Finished";
import { NoLifesHome } from "../Misc/NolifesHome";

const grow = keyframes({
  "0%": { transform: "scale(0.1)" },
  "100%": { transform: "scale(1)" },
});

export const Dialog = styled("dialog", {
  position: "relative",
  padding: "18px",
  borderRadius: "16px",
  width: "600px",
  backgroundColor: "rgba(79, 3, 255, 0.9)",
  border: "none",
  outline: "none",
  marginTop: 65,
  transformOrigin: "center",
  animation: `${grow} 0.3s ease-out forwards`,
  "&[open]": {
    animation: `${grow} 0.3s ease-out forwards`,
  },
  "@s": {
    width: "90vw",
  },
});

interface DialogModalProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  css?: CSS;
}

export type ModalOptions =
  | "registerResult"
  | "loginResult"
  | "menu"
  | "ranking"
  | "login"
  | "finished"
  | "noLifesHome"
  | "none";

export const DialogModal = ({ css, ...props }: DialogModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const modalOption = useStore((s) => s.modalOption);
  const setModalOption = useStore((s) => s.setModalOption);

  const handleClickOutside = (event: globalThis.MouseEvent) => {
    if (event.target === dialogRef.current) {
      setModalOption("none");
    }
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleNativeClose = () => {
      if (modalOption !== "none") {
        setModalOption("none");
      }
    };

    dialog.addEventListener("close", handleNativeClose);

    if (modalOption !== "none") {
      dialog.showModal();
    } else {
      dialog.close();
    }

    dialog.addEventListener("click", handleClickOutside);

    return () => {
      dialog.removeEventListener("close", handleNativeClose);
      dialog.removeEventListener("mousedown", handleClickOutside);
    };
    //eslint-disable-next-line
  }, [modalOption, setModalOption]);

  if (modalOption === "none") {
    return null;
  }

  return (
    <Dialog ref={dialogRef} css={{ ...css }} {...props}>
      {ModalContentMapper[modalOption]}
    </Dialog>
  );
};

const ModalContentMapper: Record<ModalOptions, JSX.Element | null> = {
  loginResult: <LoginResult />,
  registerResult: <RegisterResult />,
  login: <LoginContent />,
  menu: <MenuContainer />,
  ranking: <Ranking />,
  finished: <Finished />,
  noLifesHome: <NoLifesHome />,
  none: null,
};
