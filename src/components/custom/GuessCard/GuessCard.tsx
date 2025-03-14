import React, { useState } from "react";
import { ButtonClean } from "../../buttons/buttons";
import { ImageCss } from "../../image/Image";
import useSound from "use-sound";
import { storageBaseUrl } from "@/lib/supabase";
import { PlayButton } from "./PlayButton";
import { OverLayOpacity } from "./ProgressBar";
import { type Card } from "@/types/types";
import { colorPicker, useAnsState } from "@/lib/hooks";

export const GuessCard = ({
  card,
  isInView,
}: {
  card: Card;
  isInView: boolean;
}) => {
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
        borderRadius: "30px",
        overflow: "hidden",
        width: "100%",
        height: !isInView ? "80%" : "100%",
        aspectRatio: 28 / 25,
        border: `6px solid ${color}`,
        padding: "0px",
        boxSizing: "border-box",
        transition: "height 0.5s ease",
      }}
    >
      {isPlaying && <OverLayOpacity duration={duration} />}
      <ImageCss
        src={`${storageBaseUrl}/${card.image_src}`}
        alt={card.image_src ?? ""}
        width={200}
        height={200}
        css={{
          borderRadius: "20px",
          width: "100%",
          height: "auto",
          aspectRatio: 28 / 25,
          objectFit: "cover",
        }}
        priority
      />
      <PlayButton isPlaying={isPlaying} color={color} />
      {/* <AlertPoint status={alert} id={card.id} /> */}
    </ButtonClean>
  );
};
