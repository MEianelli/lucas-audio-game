import { ButtonClean } from "@/components/buttons/buttons";
import { Div } from "@/components/containers/div";
import { FlexC } from "@/components/containers/flex";
import { useRef } from "react";
import { DialogModal } from "../containers/modal";
import { MenuContainer } from "./Menu/MenuContainer";

export function Menu() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <ButtonClean
        css={{ marginLeft: "left" }}
        onClick={() => dialogRef.current?.showModal()}
      >
        <FlexC
          css={{
            justifyContent: "center",
            alignItems: "end",
            gap: "7px",
            margin: "8px",
            height: "min-content",
          }}
        >
          <Div
            css={{
              width: "25px",
              height: "6px",
              backgroundColor: "White",
            }}
          />
          <Div
            css={{ width: "38px", height: "8px", backgroundColor: "White" }}
          />
          <Div
            css={{ width: "38px", height: "8px", backgroundColor: "White" }}
          />
        </FlexC>
      </ButtonClean>{" "}
      <DialogModal ref={dialogRef}>
        <MenuContainer />
      </DialogModal>
    </>
  );
}
