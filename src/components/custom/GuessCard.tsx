import React, { useState } from "react";
import { ButtonClean } from "../buttons/buttons";
import { FlexC } from "../containers/flex";
import { ImageCss } from "../image/Image";
import { TextInput } from "../inputs/input";
import { Text } from "../text/text";
import useSound from "use-sound";
import { useStore } from "@/lib/store";
import { storageBaseUrl, TGuess } from "@/lib/supabase";
import { Div } from "../containers/div";

type AlertStatus = "ok" | "nok" | "neutral";

export const GuessCard = ({ card }: { card: TGuess }) => {
  const [play, aux] = useSound(`${storageBaseUrl}/${card.audio_src}`);
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState<AlertStatus>("neutral");
  const setLife = useStore((store) => store.setLife);
  const setScore = useStore((store) => store.setScore);
  const setHitIds = useStore((store) => store.setHitIds);

  function handleEnter() {
    aux.stop();
    if (
      card
        .correct_answers!.split(",")
        .some((ans) => value.toLocaleLowerCase().trim().includes(ans))
    ) {
      setTimeout(() => setHitIds(card.id), 1500);
      setAlert("ok");
      setScore();
    } else {
      setAlert("nok");
      setLife("sub");
    }
    setValue("");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setAlert("neutral");
    setValue(e.target.value);
  }

  function handlePlay() {
    aux.stop();
    play();
  }

  return (
    <FlexC css={{ gap: "8px", flex: 1, padding: "4px", alignItems: "center" }}>
      <ButtonClean onClick={handlePlay}
      css={{position:"relative",
        "&:active": { scale: 0.9 }, transition: "scale 0.1s linear",
        borderRadius:"10px", overflow:"hidden"}}>
        <ImageCss
          src={`${storageBaseUrl}/${card.image_src}`}
          width={120}
          height={120}
          alt={card.id}
          css={{}}
        />
        <Div
        css={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "40px",
          height: "40px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Div
          css={{
            width: 0,
            height: 0,
            borderLeft: "12px solid white",
            borderTop: "6px solid transparent",
            borderBottom: "6px solid transparent",
            marginLeft: "3px",
          }}
        />
      </Div>
      </ButtonClean>
      <TextInput
        type="text"
        placeholder="Type a movie"
        value={value}
        onChange={handleChange}
        onKeyUp={(event) => event.key === "Enter" && handleEnter()}
      />
      
      <AlertPoint status={alert} />
    </FlexC>
  );
};

const AlertPoint = ({ status }: { status: AlertStatus }) => {
  if (status === "neutral") return null;
  if (status === "ok")
    return (
      <Text size={"s"} color={"green"} weight={700}>
        Acertou! +1
      </Text>
    );
  if (status === "nok")
    return (
      <Text size={"s"} color={"red"} weight={700}>
        Errou!
      </Text>
    );
};
