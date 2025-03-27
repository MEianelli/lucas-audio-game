import { useEffect, useState } from "react";

export function useRandomSeed() {
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    setSeed(Math.random());
  }, []);

  return { seed };
}
