import React, { useState } from "react";
import { ButtonClean } from "../buttons/buttons";
import { FlexC } from "../containers/flex";
import { ImageCss } from "../image/Image";
import { TextInput } from "../inputs/input";
import { Text } from "../text/text";
import useSound from "use-sound";
import { useStore } from "@/lib/store";
import { storageBaseUrl, TGuess } from "@/lib/supabase";

type AlertStatus = "ok" | "nok" | "neutral";

export const GuessCard = ({ card }: { card: TGuess }) => {
  const [play] = useSound(`${storageBaseUrl}/${card.audio_src}`);
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState<AlertStatus>("neutral");
  const setLife = useStore((store) => store.setLife);
  const setScore = useStore((store) => store.setScore);

  function handleEnter() {
    if (
      card
        .correct_answers!.split(",")
        .some((ans) => value.toLocaleLowerCase().trim().includes(ans))
    ) {
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

  return (
    <FlexC css={{ gap: "8px", flex: 1, padding: "4px", alignItems: "center" }}>
      <ButtonClean onClick={() => play()}>
        <ImageCss
          src={`${storageBaseUrl}/${card.image_src}`}
          width={100}
          height={100}
          alt="caneca-mauricio"
          css={{ "&:hover": { scale: 1.1 }, transition: "scale 0.1s linear" }}
        />
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
