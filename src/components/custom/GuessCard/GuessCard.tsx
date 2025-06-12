import React, { useEffect, useState } from "react";
import { ButtonClean } from "@/components/buttons/buttons";
import { ImageCss } from "@/components/image/Image";
import useSound from "use-sound";
import { ASPECT_R, storageBaseUrl } from "@/lib/contants";
import { type Card } from "@/types/types";
import { useAnsState } from "@/lib/hooks/useAnsState";
import { Div } from "@/components/containers/div";
import { BlurText } from "@/components/text/BlurText";
import { BarsAudioWave } from "@/components/icons/barsAudioWave/BarsAudioWave";
import { pulseBrilho } from "./GuessCardAnimations";

export const GuessCard = ({ card, ncard }: { card: Card; ncard: Card }) => {
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

  return (
    <ButtonClean
      onClick={handleToggle}
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        aspectRatio: `${ASPECT_R}`,
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
        src={`${storageBaseUrl}/${ncard.image_src}`}
        alt={"hidden"}
        width={200}
        height={120}
        priority
        css={{
          display: "none",
          pointerEvents: "none",
        }}
      />
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
          aspectRatio: `${ASPECT_R}`,
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
          aspectRatio: `${ASPECT_R}`,
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
        {isPlaying && <BarsAudioWave />}
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
      <Div
        css={{
          position: "absolute",
          borderRadius: "10px",
          width: "100%",
          height: "100%",
          aspectRatio: `${ASPECT_R}`,
          background: "transparent",
          pointerEvents: "none",
          filter: "blur(2px)",
          //animation: state !== "neutral" ? `${shadowSpread} 1s normal` : `${startShadow} 1s normal`,
        }}
      />
    </ButtonClean>
  );
};
