import { FlexR } from "../containers/flex";
import { GuessCard, TGuessCard } from "./GuessCard";

const data: TGuessCard[] = [
  {
    audioSrc: "/audio/airbnb-audio.mp3",
    imgSrc: "/imgs/caneca-mauricio.png",
    correctAnswers: ["mauricio", "caneca"],
  },
  {
    audioSrc: "/audio/audio-ahan.mp3",
    imgSrc: "/imgs/rangers.webp",
    correctAnswers: ["mauricio", "caneca"],
  },
  {
    audioSrc: "/audio/audio-bichona.mp3",
    imgSrc: "/imgs/ironmaiden.jpg",
    correctAnswers: ["mauricio", "caneca"],
  },
  {
    audioSrc: "/audio/audio-marcel.mp3",
    imgSrc: "/imgs/ironmaiden.jpg",
    correctAnswers: ["mauricio", "caneca"],
  },
  {
    audioSrc: "/audio/audio-mauricio.mp3",
    imgSrc: "/imgs/motao.png",
    correctAnswers: ["mauricio", "caneca"],
  },
  {
    audioSrc: "/audio/audio-queisso.mp3",
    imgSrc: "/imgs/david-imagem.png",
    correctAnswers: ["mauricio", "caneca"],
  },
  {
    audioSrc: "/audio/audio-rick.mp3",
    imgSrc: "/imgs/parmegiana-rick.jpg",
    correctAnswers: ["mauricio", "caneca"],
  },
  {
    audioSrc: "/audio/ditto.mp3",
    imgSrc: "/imgs/ditto.png",
    correctAnswers: ["mauricio", "caneca"],
  },
];

export const GuessCards = () => {
  return (
    <FlexR
      css={{
        gap: "16px",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      {data.map((it, i) => (
        <GuessCard key={it.imgSrc + i} card={it} />
      ))}
    </FlexR>
  );
};
