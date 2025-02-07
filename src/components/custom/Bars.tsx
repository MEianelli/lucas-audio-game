import { ButtonClean } from "@/components/buttons/buttons";
import { Div } from "@/components/containers/div";
import { FlexR } from "@/components/containers/flex";
import { DialogModal } from "../containers/modal";
import { useRef, useState } from "react";
import { Ranking } from "./Ranking";

export function Bars() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    dialogRef.current?.showModal();
    setIsOpen(true);
  };

  const closeModal = () => {
    dialogRef.current?.close();
    setIsOpen(false);
  };

  return (
    <>
      <ButtonClean onClick={openModal}>
        <FlexR
          css={{
            justifyContent: "center",
            alignItems: "end",
            gap: "$4",
            height: "min-content",
          }}
        >
          <Div
            css={{
              width: "8px",
              height: "15px",
              backgroundColor: "DarkViolet",
            }}
          />
          <Div
            css={{ width: "8px", height: "20px", backgroundColor: "Yellow" }}
          />
          <Div
            css={{ width: "8px", height: "25px", backgroundColor: "Green" }}
          />
        </FlexR>
      </ButtonClean>
      <DialogModal ref={dialogRef} onClose={closeModal}>
        {isOpen && <Ranking />}
      </DialogModal>
    </>
  );
}
