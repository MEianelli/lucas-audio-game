import { styled } from "@/styles/stitches.config";
import { CloseButton } from "../buttons/closeButton";
import { CSS } from "@stitches/react";
import { useEffect } from "react";

export const Dialog = styled("dialog", {
  position: "relative",
  background: "$white",
  padding: "16px",
  borderRadius: "8px",
});

interface DialogModalProps
  extends React.DialogHTMLAttributes<HTMLDialogElement> {
  ref: React.RefObject<HTMLDialogElement | null>;
  css?: CSS;
  openAtStart?: boolean;
  onClose?: () => void;
}

export const DialogModal = ({
  ref,
  css,
  openAtStart,
  onClose,
  ...props
}: DialogModalProps) => {
  useEffect(() => {
    if (openAtStart) {
      ref.current?.showModal();
    }
  }, [openAtStart, ref]);

  function handleClose() {
    if (onClose) {
      onClose();
      return;
    }
    return ref?.current?.close();
  }

  return (
    <Dialog
      ref={ref}
      css={{
        ...css,
        maxWidth: "400px",
        backgroundColor: "$dirtWhite",
        border: "none",
        outline: "none",
        marginTop: 12,
        paddingTop: 32,
      }}
      {...props}
    >
      {props.children}
      <CloseButton onClick={handleClose} />
    </Dialog>
  );
};
