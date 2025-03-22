import { keyframes, styled } from "@/styles/stitches.config";
import { CloseButton } from "../../buttons/closeButton";
import { CSS } from "@stitches/react";
import { JSX, useEffect, useRef } from "react";
import { MenuContainer } from "../Header/Menu/MenuContainer";
import { useStore } from "@/lib/store";
import { LoginResult, RegisterResult } from "../Login/LoginResult";
import { Ranking } from "../Misc/Ranking";
import { LoginContent } from "../Login/LoginContent";

const grow = keyframes({
  "0%": { transform: "scale(0.1)" },
  "100%": { transform: "scale(1)" },
});

export const Dialog = styled("dialog", {
  position: "relative",
  padding: "18px",
  paddingTop: "46px",
  borderRadius: "16px",
  width: "600px",
  backgroundColor: "$darkPurple",
  border: "3px solid $purple",
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

interface DialogModalProps
  extends React.DialogHTMLAttributes<HTMLDialogElement> {
  css?: CSS;
}

export type ModalOptions =
  | "registerResult"
  | "loginResult"
  | "menu"
  | "ranking"
  | "login"
  | "none";

export const DialogModal = ({ css, ...props }: DialogModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const modalOption = useStore((s) => s.modalOption);
  const setModalOption = useStore((s) => s.setModalOption);

  const handleClose = () => {
    setModalOption("none");
    dialogRef?.current?.close();
  };

  useEffect(() => {
    dialogRef.current?.showModal();
  }, [modalOption, dialogRef]);

  if (modalOption === "none") {
    return null;
  }

  return (
    <Dialog ref={dialogRef} css={{ ...css }} {...props}>
      {ModalContentMapper[modalOption]}
      <CloseButton onClick={handleClose} />
    </Dialog>
  );
};

const ModalContentMapper: Record<ModalOptions, JSX.Element | null> = {
  loginResult: <LoginResult />,
  registerResult: <RegisterResult />,
  login: <LoginContent />,
  menu: <MenuContainer />,
  ranking: <Ranking />,
  none: <></>,
};
