import { Div } from "@/components/containers/div";
import AdComponent from "./AdsComponent";

export function AdsContainerMobile({ children }: { children: React.ReactNode }) {
  return (
    <Div
      css={{
        width: "300px",
        height: "250px",
        position: "fixed",
        bottom: 12,
        right: "50%",
        transform: "translate(50%, 0%)",
        "@s": {
          width: "300px",
          height: "150px",
        },
      }}
    >
      {children}
    </Div>
  );
}

export function AdsContainerDeskRight({ children }: { children: React.ReactNode }) {
  return (
    <Div
      css={{
        position: "fixed",
        width: '120px',
        height: '600px',
        top: 16,
        right: 16,
        "@s": {
          display: "none",
          width: '120px',
          height: '600px',
        },
      }}
    >
      {children}
    </Div>
  );
}

export function AdsContainerDeskLeft({ children }: { children: React.ReactNode }) {
  return (
    <Div
      css={{
        position: "fixed",
        width: '120px',
        height: '600px',
        top: 16,
        left: 16,
        "@s": {
          display: "none",
          width: '120px',
          height: '600px',
        },
      }}
    >
      {children}
    </Div>
  );
}

export function AdsMobile() {
  return (
    <AdsContainerMobile>
      <AdComponent adSlot="3958073259" adFormat="fluid" mobile />
    </AdsContainerMobile>
  );
}

export function AdsDesk() {
  return (
    <>
      <AdsContainerDeskRight>
        <AdComponent adSlot="6951175905" adFormat="vertical"/>
      </AdsContainerDeskRight>
      <AdsContainerDeskLeft>
        <AdComponent adSlot="9262478627" adFormat="vertical"/>
      </AdsContainerDeskLeft>
    </>
  );
}
