import React, { useState } from "react";
import { ButtonClean } from "../../buttons/buttons";
import { ImageCss } from "../../image/Image";
import useSound from "use-sound";
import { storageBaseUrl } from "@/lib/contants";
import { type Card } from "@/types/types";
import { useAnsState } from "@/lib/hooks/useAnsState";
import { StateIcon } from "./StateIcon";
import Waveform from "./Waveform";
import { Div } from "@/components/containers/div";
import { keyframes } from "@/styles/stitches.config";

const pulseBrilho = keyframes({
  "0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100%": {
    opacity: "90%",
  },
  "25%, 35%, 45%, 75%": {
    opacity: "95%",
  },
  "15%, 65%, 85%": {
    opacity: "92%",
  },
  "5%, 55%, 95%": {
    opacity: "100%",
  },
});

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

  return (
    <ButtonClean
      onClick={handleToggle}
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        borderRadius: "20px",
        aspectRatio: `${5 / 3}`,
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
          width: "100%",
          mixBlendMode: "screen",
          filter: "blur(15px) saturate(200%) brightness(1.5)",
          height: "auto",
          aspectRatio: `${5 / 3}`,
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
          width: "95%",
          filter: "blur(1px)",
          height: "auto",
          aspectRatio: `${5 / 3}`,
          objectFit: "cover",
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
        {isPlaying && <Waveform />}
        {!isPlaying && <StateIcon state={state} />}
      </Div>
    </ButtonClean>
  );
};
