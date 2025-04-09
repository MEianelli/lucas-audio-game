import React, { useState } from "react";
import { ButtonClean } from "../../buttons/buttons";
import { ImageCss } from "../../image/Image";
import useSound from "use-sound";
import { storageBaseUrl } from "@/lib/contants";
import { PlayButton } from "./PlayButton";
import { OverLayOpacity } from "./ProgressBar";
import { type Card } from "@/types/types";
import { useAnsState } from "@/lib/hooks/useAnsState";
import { StateIcon } from "./StateIcon";
import Waveform from "./Waveform";
import { Div } from "@/components/containers/div";
import { colorPicker } from "@/lib/helpers/colorPicker";

export const GuessCard = ({ card, isInView }: { card: Card; isInView: boolean }) => {
  const { state } = useAnsState(card.id);
  const color = colorPicker(state, true, true);

  const soundUrl = `${storageBaseUrl}/${card.audio_src}`;

  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { stop, duration }] = useSound(soundUrl, {
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
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        width: "100%",
        aspectRatio: `${200 / 120}`,
        height: !isInView ? "80%" : "100%",
        border: `4px solid ${color}`,
        padding: "0px",
        boxSizing: "border-box",
        transition: "height 0.5s ease",
        userSelect: "none",
        zIndex: "10",
      }}>
      {isPlaying && <OverLayOpacity duration={duration} />}
      <ImageCss
        src={`${storageBaseUrl}/${card.image_src}`}
        alt={card.image_src ?? ""}
        width={200}
        height={120}
        css={{ borderRadius: "10px", width: "100%", height: "auto", aspectRatio: `${200 / 120}`, objectFit: "cover" }}
      />

      <Div
        css={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
        {state === "neutral" && <PlayButton isPlaying={isPlaying} color={color} />}
        {isPlaying && <Waveform />}
        {!isPlaying && <StateIcon state={state} />}
      </Div>
    </ButtonClean>
  );
};
