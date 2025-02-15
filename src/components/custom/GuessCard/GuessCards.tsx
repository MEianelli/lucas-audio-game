import { useEffect, useMemo, useState } from "react";
import { Grid } from "../../containers/flex";
import { GuessCard } from "./GuessCard";
import { getAllGuesses, TGuess } from "@/lib/supabase";
import { useStore } from "@/lib/store";
import * as motion from "motion/react-client";
import { shuffleArray } from "@/utils/random";

export const GuessCards = () => {
  const [guesses, setGuesses] = useState<TGuess[] | null>(null);

  const hitids = useStore((store) => store.hitids);
  const ignoreids = useStore((store) => store.ignoreids);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getAllGuesses();
        if (data.length) {
          setGuesses(shuffleArray(data));
        }
      } catch (error) {
        alert(error);
      }
    }
    getData();
  }, []);

  const filtered = useMemo(() => {
    return guesses
      ?.filter(({ id }) => !hitids.includes(id) && !ignoreids.includes(id))
      .slice(0, 9);
  }, [hitids, ignoreids, guesses]);

  return (
    <Grid
      css={{
        display: "grid",
        position: "relative",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        gap: "2%",
        width: "100%",
      }}
    >
      {filtered?.map((it) => (
        <motion.div
          key={it.id}
          layout
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
          }}
          style={{ height: "fit-content" }}
        >
          <GuessCard card={it} />
        </motion.div>
      ))}
    </Grid>
  );
};
