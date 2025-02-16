import { create } from "zustand";
import { getOneUser, updateProperty } from "./supabase";
import { crypto } from "@/utils/crypto";
import { MAX_LIFE_CAP } from "./contants";
import { ModalOptions } from "@/components/containers/modal";

export type TStore = {
  score: number;
  loadingDB: boolean;
  setScore: () => void;
  lifes: number;
  modalOption: ModalOptions;
  setModalOption: (option: ModalOptions) => void;
  setAddLife: (number?: number) => Promise<void>;
  setSubLife: (ids?: number[], number?: number) => Promise<void>;
  hitids: number[];
  missids: number[];
  ignoreids: number[];
  sethitids: (id: number[]) => Promise<void | boolean>;
  setIgnoreids: (id: number[]) => Promise<void | boolean>;
  name: string;
  pass: string;
  lastheartgain: number;
  setName: (name: string) => void;
  setLastheartgain: (lastheartgain: number) => void;
  setPass: (pass: string) => void;
  updateUserFromDB: () => Promise<void>;
  lastLifeChange: "added" | "subbed" | "none";
};

export const useStore = create<TStore>((set, get) => ({
  name: "",
  pass: "",
  modalOption: "login",
  lastheartgain: 0,
  loadingDB: true,
  setName: (name) => set({ name }),
  setLastheartgain: (lastheartgain) => set({ lastheartgain }),
  setPass: (pass) => set({ pass }),
  score: 0,
  lifes: 5,
  lastLifeChange: "none",
  hitids: [],
  missids: [],
  ignoreids: [],
  setModalOption: (option: ModalOptions) => set({ modalOption: option }),
  updateUserFromDB: async () => {
    const { name } = get();
    set({ loadingDB: true });
    const user = await getOneUser({
      field: "name",
      value: name,
    });
    if (!user?.length) {
      set({ loadingDB: false });
      return;
    }
    const { lifes, hitids, lastheartgain, missids, ignoreids } = user[0];
    set({
      lifes,
      hitids,
      missids,
      ignoreids,
      lastLifeChange: "none",
      loadingDB: false,
      lastheartgain,
    });
  },
  setIgnoreids: async (ids) => {
    const { ignoreids, name, pass } = get();
    const newIgnore = [...new Set([...ignoreids, ...ids])];
    const error = await updateProperty({
      name,
      pass: crypto({ name, pass }),
      updates: {
        ignoreids: newIgnore,
      },
    });
    if (error) throw Error(error);
    set({ ignoreids: newIgnore });
  },
  sethitids: async (ids) => {
    const { hitids, name, pass } = get();
    const newhitids = [...new Set([...hitids, ...ids])];
    const error = await updateProperty({
      name,
      pass: crypto({ name, pass }),
      updates: {
        hitids: newhitids,
      },
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
    const { lifes, name, pass } = get();
    const newLifes = Math.min(MAX_LIFE_CAP, lifes + number);
    const heartGainTime = Date.now();
    const error = await updateProperty({
      name,
      pass: crypto({ name, pass }),
      updates: {
        lifes: newLifes,
        lastheartgain: heartGainTime,
      },
    });
    if (error) throw Error(error);
    set({
      lifes: newLifes,
      lastLifeChange: "added",
      lastheartgain: heartGainTime,
    });
  },
  setSubLife: async (ids, number = 1) => {
    const { lifes, name, pass, missids } = get();
    const newMissIds = [...new Set([...missids, ...(ids ?? [])])];
    const newLifes = Math.max(0, lifes - number);
    const error = await updateProperty({
      name,
      pass: crypto({ name, pass }),
      updates: {
        lifes: newLifes,
        missids: newMissIds,
      },
    });
    if (error) throw Error(error);
    set({ lifes: newLifes, lastLifeChange: "subbed", missids: newMissIds });
  },
}));
