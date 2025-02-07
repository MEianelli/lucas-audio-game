import React, { useEffect, useRef, useState } from "react";
import { ButtonClean } from "../../buttons/buttons";
import { ImageCss } from "../../image/Image";
import { DarkTextInput } from "../../inputs/input";
import useSound from "use-sound";
import { useStore } from "@/lib/store";
import { storageBaseUrl, TGuess } from "@/lib/supabase";
import { PlayButton } from "../PlayButton";
import { AlertPoint, AlertStatus } from "./AlertMessage";
import { ProgressBar } from "./ProgressBar";
import { cardDimentions } from "@/styles/stitches.config";
import * as motion from "motion/react-client";

export const GuessCard = ({ card }: { card: TGuess }) => {
  const soundUrl = `${storageBaseUrl}/${card.audio_src}`;
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState<AlertStatus>("neutral");
  const [showInput, setShowInput] = useState(false);
  const setSubLife = useStore((store) => store.setSubLife);
  const sethitids = useStore((store) => store.sethitids);
  const hitids = useStore((store) => store.hitids);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (hitids?.includes(card.id)) {
      setAlert("ok");
    }
  }, [hitids]);

  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { stop, duration }] = useSound(soundUrl, {
    onplay: () => setIsPlaying(true),
    onstop: () => setIsPlaying(false),
    onend: () => setIsPlaying(false),
  });

  const handleToggle = () => {
    inputRef.current?.focus();
    setShowInput(true);
    if (isPlaying) {
      stop();
    } else {
      play();
    }
  };

  function handleEnter() {
    stop();
    if (
      card
        .correct_answers!.split(",")
        .some((ans) => value.toLocaleLowerCase().trim().includes(ans))
    ) {
      try {
        setAlert("ok");
        setTimeout(() => sethitids([card.id]), 1500);
      } catch (error) {
        console.log(error);
      }
    } else {
      setAlert("nok");
      setSubLife();
    }
    setValue("");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setAlert("neutral");
    setValue(e.target.value);
  }

  function handleBlur() {
    setShowInput(false);
  }

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
      <ButtonClean
        onClick={handleToggle}
        css={{
          position: "relative",
          borderRadius: "10px",
          overflow: "hidden",
          width: "$cardWidth",
          height: "$cardHeight",
          backgroundColor: "$darkRed",
        }}
      >
        {isPlaying && <ProgressBar duration={duration} />}
        <ImageCss
          src={`${storageBaseUrl}/${card.image_src}`}
          width={cardDimentions.width}
          height={cardDimentions.height}
          alt={card.audio_src ?? ""}
          css={{ borderRadius: "10px" }}
        />
        {alert === "neutral" && <PlayButton isPlaying={isPlaying} />}

        <DarkTextInput
          ref={inputRef}
          type="text"
          placeholder="Type a movie"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyUp={(event) => event.key === "Enter" && handleEnter()}
          css={{
            position: "absolute",
            zIndex: "4",
            left: 8,
            bottom: 8,
            opacity: showInput ? "1" : "0",
          }}
        />

        <AlertPoint status={alert} />
      </ButtonClean>
    </motion.div>
  );
};
