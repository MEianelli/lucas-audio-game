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
}

export const DialogModal = ({
  ref,
  css,
  openAtStart,
  ...props
}: DialogModalProps) => {
  useEffect(() => {
    if (openAtStart) {
      ref.current?.showModal();
    }
  }, [openAtStart, ref]);

  return (
    <Dialog ref={ref} css={{ ...css }} {...props}>
      {props.children}
      <CloseButton onClick={() => ref?.current?.close()} />
    </Dialog>
  );
};
