import React, { useEffect, useRef, useState } from "react";
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
import { useStore } from "@/lib/store";

export const GuessCard = ({ cards }: { cards: Card[] }) => {
  const lifes = useStore((s) => s.lifes);
  const noLifes = lifes <= 0;
  const { state } = useAnsState(cards[0]?.card_id);

  const soundUrl = `${storageBaseUrl}/${cards[0]?.audio_src}`;

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout>(null);

  const [play, { stop }] = useSound(soundUrl, {
    onplay: () => setIsPlaying(true),
    onstop: () => setIsPlaying(false),
    onend: () => setIsPlaying(false),
    interrupt: true,
  });

  useEffect(() => {
    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
    };
  }, []);

  const handleTouch = (e: React.TouchEvent) => {
    e.preventDefault();
    handleClick();
  };

  const handleClick = () => {
    if (!hasUserInteracted) {
      setHasUserInteracted((prev) => (!prev ? true : prev));
    }

    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }

    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setHasUserInteracted(false);
  };

  useEffect(() => {
    if (hasUserInteracted || !soundUrl || noLifes) return;

    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }

    autoPlayTimeoutRef.current = setTimeout(() => {
      stop();
      play();
    }, 400);
  }, [soundUrl, hasUserInteracted, play, stop, noLifes]);

  useEffect(() => {
    const timer = setTimeout(() => stop(), 200);
    return () => clearTimeout(timer);
  }, [state, stop]);

  if (!cards.length || cards.length < 2) return null;

  return (
    <ButtonClean
      onClick={handleClick}
      onTouchEnd={handleTouch}
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
        src={`${storageBaseUrl}/${cards[1]?.image_src}`}
        alt={"hidden"}
        width={200}
        height={120}
        priority={true}
        css={{
          display: "none",
          pointerEvents: "none",
        }}
      />
      <ImageCss
        src={`${storageBaseUrl}/${cards[0]?.image_src}`}
        alt={cards[0]?.image_src ?? ""}
        width={200}
        height={120}
        priority={true}
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
        src={`${storageBaseUrl}/${cards[0]?.image_src}`}
        alt={cards[0]?.image_src ?? ""}
        width={200}
        height={120}
        priority={true}
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
        }}
      />
    </ButtonClean>
  );
};
