import React, { useEffect, useState } from "react";
import { ButtonClean } from "../../buttons/buttons";
import { ImageCss } from "../../image/Image";
import useSound from "use-sound";
import { storageBaseUrl } from "@/lib/contants";
import { type Card } from "@/types/types";
import { useAnsState } from "@/lib/hooks/useAnsState";
import { Div } from "@/components/containers/div";
import { keyframes } from "@/styles/stitches.config";
import "./test.css";
import { BlurText } from "@/components/buttons/BlurText/BlurText";
import { BarsWave } from "./BarsWave";

const pulseBrilho = keyframes({
  "0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100%": {
    opacity: "50%",
  },
  "25%, 35%, 45%, 75%": {
    opacity: "55%",
  },
  "15%, 65%, 85%": {
    opacity: "52%",
  },
  "5%, 55%, 95%": {
    opacity: "60%",
  },
});

const shadowSpread = keyframes({
  "0%": {
    boxShadow: "0px 0px 10px 0px #120226 inset, 0px 0px 10px 5px #120226",
  },
  "100%": {
    boxShadow: "0px 0px 10px 150px #120226 inset, 0px 0px 10px 5px #120226",
  },
});

const startShadow = keyframes({
  "0%": {
    boxShadow: "0px 0px 10px 150px #120226 inset, 0px 0px 10px 5px #120226",
  },
  "100%": {
    boxShadow: "0px 0px 10px 0px #120226 inset, 0px 0px 10px 0px #120226",
  },
});

const aspectR = 2.5;

export const GuessCard = ({ card }: { card: Card }) => {
  const { state } = useAnsState(card.card_id);

  const soundUrl = `${storageBaseUrl}/${card.audio_src}`;

  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { stop }] = useSound(soundUrl, {
    onplay: () => setIsPlaying(true),
    onstop: () => setIsPlaying(false),
    onend: () => setIsPlaying(false),
  });

  const handleToggle = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
  };

  useEffect(() => {
    setTimeout(() => stop(), 500);
    //eslint-disable-next-line
  }, [state]);

  const animationShadow =
    state !== "neutral"
      ? {
          animation: `${shadowSpread} 1s normal`,
        }
      : {};

  return (
    <ButtonClean
      onClick={handleToggle}
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        aspectRatio: `${aspectR}`,
        width: "100%",
        height: "100%",
        padding: "0px",
        boxSizing: "border-box",
        transition: "height 0.5s ease",
        userSelect: "none",
        zIndex: "10",
      }}
    >
      <ImageCss
        src={`${storageBaseUrl}/${card.image_src}`}
        alt={card.image_src ?? ""}
        width={200}
        height={120}
        css={{
          borderRadius: "10px",
          width: "90%",
          mixBlendMode: "screen",
          filter: "blur(10px) saturate(200%) brightness(1.5)",
          height: "auto",
          aspectRatio: `${aspectR}`,
          objectFit: "cover",
          animation: `${pulseBrilho} 1s infinite`,
        }}
      />
      <ImageCss
        src={`${storageBaseUrl}/${card.image_src}`}
        alt={card.image_src ?? ""}
        width={200}
        height={120}
        css={{
          position: "absolute",
          borderRadius: "10px",
          width: "98%",
          height: "auto",
          filter: "blur(2px)",
          aspectRatio: `${aspectR}`,
          objectFit: "cover",
          opacity: "0.45",
        }}
      />
      <Div
        css={{
          position: "absolute",
          top: "15%",
          left: "12%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {!isPlaying && <BlurText title="Play ▶" css={{ fontSize: "14px", color: "white", filter: "blur(0.6px)" }} />}
      </Div>
      <Div
        css={{
          position: "absolute",
          top: "15%",
          left: "10%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {isPlaying && <BarsWave />}
      </Div>
      <Div
        css={{
          position: "absolute",
          borderRadius: "10px",
          width: "96%",
          height: "96%",
          aspectRatio: `${aspectR}`,
          background: "rgba(79, 3, 255, 0.8)",
          pointerEvents: "none",
          filter: "blur(2px)",
          mixBlendMode: "saturation",
        }}
      />
      <Div
        css={{
          position: "absolute",
          borderRadius: "10px",
          width: "100%",
          height: "100%",
          aspectRatio: `${aspectR}`,
          background: "transparent",
          pointerEvents: "none",
          filter: "blur(2px)",
          animation: `${startShadow} 1s normal`,
          ...animationShadow,
        }}
      />
    </ButtonClean>
  );
};
