import { create } from "zustand";
import { getOneUser, updateHits, updateLifes } from "./supabase";
import { crypto } from "@/utils/crypto";

export type TStore = {
  score: number;
  setScore: () => void;
  lifes: number;
  setAddLife: (number?: number) => Promise<void>;
  setSubLife: (number?: number) => Promise<void>;
  hitIds: number[];
  setHitIds: (id: number[]) => Promise<void | boolean>;
  name: string;
  pass: string;
  setName: (name: string) => void;
  setPass: (pass: string) => void;
  updateUserFromDB: () => Promise<void>;
};

export const useStore = create<TStore>((set, get) => ({
  name: "",
  pass: "",
  setName: (name) => set(() => ({ name })),
  setPass: (pass) => set(() => ({ pass })),
  score: 0,
  lifes: 5,
  hitIds: [],
  updateUserFromDB: async () => {
    const { name } = get();
    const user = await getOneUser({ field: "name", value: name });
    if (!user?.length) return;
    const { lifes, hitIds } = user[0];
    set({ lifes, hitIds });
  },
  setHitIds: async (ids) => {
    const { hitIds, name, pass } = get();
    const newHitIds = [...hitIds, ...ids];
    const error = await updateHits({
      name,
      pass: crypto({ name, pass }),
      hitIds: newHitIds,
    });
    console.log("error :", error);
    if (error) throw Error(error);
    set({ hitIds: newHitIds });
  },
  setScore: () => {
    const { score } = get();
    const newScore = score + 1;
    set({ score: newScore });
  },
  setAddLife: async (number = 1) => {
    set((store) => {
      const newlife = Math.max(0, store.lifes + number);
      return { lifes: newlife };
    });
  },
  setSubLife: async (number = 1) => {
    const { lifes, name, pass } = get();
    const newLifes = Math.max(0, lifes - number);
    const error = await updateLifes({
      name,
      pass: crypto({ name, pass }),
      lifes: newLifes,
    });
    console.log("error :", error);
    if (error) throw Error(error);
    set({ lifes: newLifes });
  },
}));
