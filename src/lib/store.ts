import { create } from "zustand";
import { updateHits } from "./supabase";
import { crypto } from "@/utils/crypto";

export type TStore = {
  score: number;
  setScore: () => void;
  life: number;
  setLife: (action: "add" | "sub") => void;
  hitIds: Set<number>;
  setHitIds: (id: number[]) => Promise<void | boolean>;
  name: string;
  pass: string;
  setName: (name: string) => void;
  setPass: (pass: string) => void;
};

export const useStore = create<TStore>((set, get) => ({
  name: "",
  pass: "",
  setName: (name) => set(() => ({ name })),
  setPass: (pass) => set(() => ({ pass })),
  score: 0,
  life: 5,
  hitIds: new Set(),
  setHitIds: async (ids) => {
    const { hitIds, name, pass } = get();
    console.log("hitIds :", hitIds);
    ids.forEach((id) => hitIds.add(id));
    const error = await updateHits({
      name,
      pass: crypto({ name, pass }),
      hitIds: Array.from(hitIds),
    });
    console.log("error :", error);
    if (error) throw Error(error);
    set({ hitIds });
  },
  setScore: () => {
    const { score } = get();
    const newScore = score + 1;
    set({ score: newScore });
  },
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
