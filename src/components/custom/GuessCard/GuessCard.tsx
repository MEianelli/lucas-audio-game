import React, { useEffect, useRef, useState } from "react";
import { ButtonClean } from "../../buttons/buttons";
import { ImageCss } from "../../image/Image";
import { Input } from "../../inputs/input";
import useSound from "use-sound";
import { useStore } from "@/lib/store";
import { storageBaseUrl, TGuess } from "@/lib/supabase";
import { PlayButton } from "../PlayButton";
import { AlertPoint, AlertStatus } from "./AlertMessage";
import { OverLayOpacity } from "./ProgressBar";
import * as motion from "motion/react-client";
import { rightAnswerCheck } from "@/lib/helpers/rightAnswerCheck";
import { MAX_LIFE_CAP } from "@/lib/contants";
import { Div } from "@/components/containers/div";
import { keyframes } from "@/styles/stitches.config";
import { DifficultyIcons } from "./DifficultyIcons";

export const GuessCard = ({ card }: { card: TGuess }) => {
  const soundUrl = `${storageBaseUrl}/${card.audio_src}`;
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState<AlertStatus>("neutral");
  const [showInput, setShowInput] = useState(false);
  const setSubLife = useStore((store) => store.setSubLife);
  const sethitids = useStore((store) => store.sethitids);
  const missids = useStore((store) => store.missids);
  const ignoreids = useStore((store) => store.ignoreids);
  const hitids = useStore((store) => store.hitids);
  const setLastheartgain = useStore((store) => store.setLastheartgain);
  const setModalOption = useStore((store) => store.setModalOption);
  const lifes = useStore((store) => store.lifes);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (hitids?.includes(card.id)) {
      setAlert("ok");
    }

    if (missids?.includes(card.id) || ignoreids?.includes(card.id)) {
      setAlert("retry");
    }
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
    setValue("");
    setShowInput(false);

    if (!rightAnswerCheck(card.correct_answers?.split(",") ?? [], value)) {
      if (lifes >= MAX_LIFE_CAP) {
        setLastheartgain(Date.now());
      }
      setAlert("nok");
      setTimeout(() => {
        setAlert("retry");
        setSubLife([card.id]);
      }, 2000);
      return;
    }

    try {
      setAlert("ok");
      setTimeout(() => sethitids([card.id]), 1500);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setValue(e.target.value);
  }

  function handleBlur() {
    stop();
    setShowInput(false);
  }

  const enterAnimation = keyframes({
    "0%": { opacity: 1, scale: 0 },
    "100%": { opacity: 1, scale: 1 },
  });

  const animation = showInput ? `${enterAnimation} 0.2s linear` : "";

  return (
    <>
      <Div
        css={{
          position: "absolute",
          left: 0,
          top: -60,
          width: "100%",
          padding: "2px",
          borderRadius: "10px",
          backgroundColor: "$lightGrey",
          transformOrigin: "center",
          animation,
          opacity: showInput ? "1" : "0",
          scale: showInput ? "1" : "0",
          zIndex: "100",
        }}
      >
        <Input
          ref={inputRef}
          type="text"
          placeholder="Which movie is that quote from?"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyUp={(event) => event.key === "Enter" && handleEnter()}
          css={{
            backgroundColor: "$grey",
            color: "$white",
            fontSize: "24px",
            width: "100%",
          }}
        />
      </Div>

      <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }}>
        <ButtonClean
          onClick={handleToggle}
          css={{
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          {/* <Text
            css={{
              fontFamily: "Barlow",
              color: "$lightGrey",
              fontSize: 12,
              position: "absolute",
              top: 4,
              left: 4,
            }}
          >
            #{card.id}
          </Text> */}
          {isPlaying && <OverLayOpacity duration={duration} />}
          <ImageCss
            src={`${storageBaseUrl}/${card.image_src}`}
            alt={card.audio_src ?? ""}
            width={200}
            height={200}
            css={{
              borderRadius: "10px",
              width: "100%",
              height: "auto",
              aspectRatio: 28 / 25,
              objectFit: "cover",
            }}
            priority
          />
          {alert === "neutral" && <PlayButton isPlaying={isPlaying} />}
          <AlertPoint status={alert} id={card.id} />
          <DifficultyIcons difficulty={card.difficulty} />
        </ButtonClean>
      </motion.div>
    </>
  );
};
