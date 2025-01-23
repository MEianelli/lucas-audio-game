import { create } from "zustand";

export type TStore = {
  score: number;
  setScore: () => void;
  life: number;
  setLife: (action: "add" | "sub") => void;
};

export const useStore = create<TStore>((set) => ({
  score: 0,
  life: 3,
  setScore: () => set((store) => ({ score: store.score + 1 })),
  setLife: (action: "add" | "sub") => {
    if (action === "add") {
      set((store) => ({ life: store.life + 1 }));
    }
    if (action === "sub") {
      set((store) => {
        const newlife = Math.max(0, store.life - 1);
        return { life: newlife };
      });
    }
  },
}));
