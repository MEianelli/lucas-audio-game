import { keyframes, styled } from "@/styles/stitches.config";
import { CloseButton } from "../buttons/closeButton";
import { CSS } from "@stitches/react";
import { JSX, RefObject, useEffect, useRef } from "react";
import { LoginContainer } from "../custom/Login/LoginContainer";
import { MenuContainer } from "../custom/Menu/MenuContainer";
import { Ranking } from "../custom/Ranking";
import { useStore } from "@/lib/store";
import { NoLifes } from "../custom/Nolifes";

const grow = keyframes({
  "0%": { transform: "scale(0.1)" },
  "100%": { transform: "scale(1)" },
});

export const Dialog = styled("dialog", {
  position: "relative",
  padding: "16px",
  borderRadius: "8px",
  maxWidth: "400px",
  backgroundColor: "$dirtWhite",
  border: "none",
  outline: "none",
  marginTop: 12,
  paddingTop: 32,
  transformOrigin: "center",
  animation: `${grow} 0.3s ease-out forwards`,
  "&[open]": {
    animation: `${grow} 0.3s ease-out forwards`,
  },
});

interface DialogModalProps
  extends React.DialogHTMLAttributes<HTMLDialogElement> {
  css?: CSS;
}

export type ModalOptions = "login" | "menu" | "ranking" | "nolifes" | "none";

export const DialogModal = ({ css, ...props }: DialogModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const modalOption = useStore((store) => store.modalOption);
  const setModalOption = useStore((store) => store.setModalOption);

  const handleClose = () => {
    dialogRef?.current?.close();
    setModalOption("none");
  };

  useEffect(() => {
    dialogRef.current?.showModal();
  }, [modalOption, dialogRef]);

  if (modalOption === "none") {
    return null;
  }

  return (
    <Dialog ref={dialogRef} css={{ ...css }} {...props}>
      {ModalContentMapper[modalOption](dialogRef)}
      <CloseButton onClick={handleClose} />
    </Dialog>
  );
};

const ModalContentMapper: Record<
  ModalOptions,
  (ref: RefObject<HTMLDialogElement | null>) => JSX.Element | null
> = {
  login: (ref) => <LoginContainer ref={ref} />,
  menu: () => <MenuContainer />,
  ranking: () => <Ranking />,
  nolifes: () => <NoLifes />,
  none: () => null,
};
