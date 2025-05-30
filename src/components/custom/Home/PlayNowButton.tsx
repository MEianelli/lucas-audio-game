import { ButtonClean } from "@/components/buttons/buttons";
import { ImageCss } from "@/components/image/Image";
import { ASPECT_R, storageBaseUrl } from "@/lib/contants";
import { Div } from "@/components/containers/div";
import { pulseBrilho } from "../GuessCard/GuessCardAnimations";
import { useEffect, useState } from "react";
import { BlurText } from "@/components/text/BlurText";
import { useRouter } from "next/router";
import { useStore } from "@/lib/store";

const imageList = [
  "1746620398420_guess.jpg",
  "1741871931390_freeze.jpg",
  "1741872708525_nomoon.jpg",
  "1745682394994_heymcfly.jpg",
];

export function PlayNowButton({ categorie }: { categorie: "movies" | "music" }) {
  const setModalOption = useStore((s) => s.setModalOption);
  const lifes = useStore((s) => s.lifes);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === imageList.length - 1 ? 0 : prevIndex + 1));
      //eslint-disable-next-line
    }, 2000);

    return () => clearInterval(timer);
  }, [imageList.length]);

  function handleClick() {
    if (lifes <= 0) {
      setModalOption("finished");
      return;
    }
    router.push(`/content?cat=${categorie}`);
  }

  return (
    <ButtonClean
      onClick={handleClick}
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        aspectRatio: `${ASPECT_R}`,
        width: "280px",
        height: "100%",
        padding: "0px",
        boxSizing: "border-box",
        transition: "height 0.5s ease",
        userSelect: "none",
        zIndex: "10",
      }}
    >
      <ImageCss
        src={`${storageBaseUrl}/images/${imageList[currentImageIndex]}`}
        alt={imageList[currentImageIndex] ?? ""}
        width={200}
        height={120}
        css={{
          borderRadius: "10px",
          width: "90%",
          mixBlendMode: "screen",
          filter: "blur(10px) saturate(200%) brightness(1.5)",
          height: "auto",
          aspectRatio: `${ASPECT_R}`,
          objectFit: "cover",
          animation: `${pulseBrilho} 1s infinite`,
        }}
      />
      <ImageCss
        src={`${storageBaseUrl}/images/${imageList[currentImageIndex]}`}
        alt={imageList[currentImageIndex] ?? ""}
        width={200}
        height={120}
        css={{
          position: "absolute",
          borderRadius: "10px",
          width: "98%",
          height: "auto",
          filter: "blur(2px)",
          aspectRatio: `${ASPECT_R}`,
          objectFit: "cover",
          opacity: "0.45",
        }}
      />
      <Div
        css={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <BlurText
          title={`Play ${categorie}`}
          css={{ fontSize: "32px", color: "white", filter: "blur(0.6px)", textTransform: "capitalize" }}
        />
      </Div>
      <Div
        css={{
          position: "absolute",
          borderRadius: "10px",
          width: "96%",
          height: "96%",
          aspectRatio: `${ASPECT_R}`,
          background: "rgba(79, 3, 255, 0.8)",
          pointerEvents: "none",
          filter: "blur(2px)",
          mixBlendMode: "saturation",
        }}
      />
    </ButtonClean>
  );
}
