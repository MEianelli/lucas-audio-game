import React, { useEffect, useState } from "react";
import { ButtonClean } from "../../buttons/buttons";
import { ImageCss } from "../../image/Image";
import useSound from "use-sound";
import { useStore } from "@/lib/store";
import { storageBaseUrl } from "@/lib/supabase";
import { difficultyToColor, PlayButton } from "./PlayButton";
import { AlertPoint, AlertStatus } from "./AlertMessage";
import { OverLayOpacity } from "./ProgressBar";
import { RndMovie } from "@/types/types";

export const GuessCard = ({
  card,
  isInView,
}: {
  card: RndMovie;
  isInView: boolean;
}) => {
  const soundUrl = `${storageBaseUrl}/${card?.audio_data?.src}`;
  const [alert, setAlert] = useState<AlertStatus>("neutral");
  const missids = useStore((store) => store.missids);
  const ignoreids = useStore((store) => store.ignoreids);
  const hitids = useStore((store) => store.hitids);
  const setModalOption = useStore((store) => store.setModalOption);
  const lifes = useStore((store) => store.lifes);

  useEffect(() => {
    if (
      missids?.includes(card?.audio_data.id) ||
      ignoreids?.includes(card?.audio_data.id)
    ) {
      setAlert("retry");
    }
    //eslint-disable-next-line
  }, [hitids, missids, ignoreids]);

  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { stop, duration }] = useSound(soundUrl, {
    onplay: () => setIsPlaying(true),
    onstop: () => setIsPlaying(false),
    onend: () => setIsPlaying(false),
  });

  const handleToggle = () => {
    if (lifes <= 0) {
      setModalOption("nolifes");
      return;
    }
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
        border: `6px solid ${difficultyToColor[card?.audio_data.difficulty]}`,
        padding: "0px",
        boxSizing: "border-box",
        transition: "height 0.5s ease",
      }}
    >
      {isPlaying && <OverLayOpacity duration={duration} />}
      <ImageCss
        src={`${storageBaseUrl}/${card?.image_data.src}`}
        alt={card?.image_data.created_at ?? ""}
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
      {alert === "neutral" && (
        <PlayButton
          isPlaying={isPlaying}
          difficulty={card?.audio_data.difficulty}
        />
      )}
      <AlertPoint status={alert} id={card?.audio_data.id} />
    </ButtonClean>
  );
};
