import { create } from "zustand";
import { getOneUser, updateHits, updateLifes } from "./supabase";
import { crypto } from "@/utils/crypto";

export type TStore = {
  score: number;
  loadingDB: boolean;
  setScore: () => void;
  lifes: number;
  setAddLife: (number?: number) => Promise<void>;
  setSubLife: (number?: number) => Promise<void>;
  hitids: number[];
  sethitids: (id: number[]) => Promise<void | boolean>;
  name: string;
  pass: string;
  setName: (name: string) => void;
  setPass: (pass: string) => void;
  updateUserFromDB: () => Promise<void>;
  lastLifeChange: "added" | "subbed" | "none";
};

export const useStore = create<TStore>((set, get) => ({
  name: "",
  pass: "",
  loadingDB: false,
  setName: (name) => set(() => ({ name })),
  setPass: (pass) => set(() => ({ pass })),
  score: 0,
  lifes: 5,
  lastLifeChange: "none",
  hitids: [],
  updateUserFromDB: async () => {
    const { name } = get();
    set({ loadingDB: true });
    const user = await getOneUser({ field: "name", value: name });
    if (!user?.length) return;
    const { lifes, hitids } = user[0];
    set({ lifes, hitids, lastLifeChange: "none", loadingDB: false });
  },
  sethitids: async (ids) => {
    const { hitids, name, pass } = get();
    const newhitids = [...new Set([...hitids, ...ids])];
    const error = await updateHits({
      name,
      pass: crypto({ name, pass }),
      hitids: newhitids,
    });
    if (error) throw Error(error);
    set({ hitids: newhitids });
  },
  setScore: () => {
    const { score } = get();
    const newScore = score + 1;
    set({ score: newScore });
  },
  setAddLife: async (number = 1) => {
    set((store) => {
      const newlife = Math.max(0, store.lifes + number);
      return { lifes: newlife, lastLifeChange: "added" };
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
    if (error) throw Error(error);
    set({ lifes: newLifes, lastLifeChange: "subbed" });
  },
}));
