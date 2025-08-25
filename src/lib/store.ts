import { create } from "zustand";
import { ModalOptions } from "@/components/custom/Modal/modal";
import { LoginState, RankData, TScreen, User } from "@/types/types";
import api from "@/utils/api";

type TStoreValues = {
  screen: TScreen;
  loginState: LoginState;
  modalOption: ModalOptions;
  rankData?: RankData;
} & User;

type TStoreFuncs = {
  setName: (name: string) => void;
  setPass: (pass: string) => void;
  setIds: (id: number[] | string[], type: "hitids" | "missids") => Promise<void | boolean>;
  updateUserData: (user: User) => void;
  updateRankData: (rankData?: RankData) => void;
  setScreen: (screen: TScreen) => void;
  setLoginState: (loginState: LoginState) => void;
  setModalOption: (option: ModalOptions) => void;
  resetStore: () => void;
  setLifes: (lifes: number) => void;
  updateUserDB: (user: Partial<User>) => void;
};

type TStore = TStoreValues & TStoreFuncs;

const initialState: TStoreValues = {
  id: 0,
  name: "",
  pass: "",
  lifes: 3,
  score: 0,
  hitids: [],
  missids: [],
  modalOption: "none",
  screen: "login",
  loginState: "login",
};

export const useStore = create<TStore>((set, get) => ({
  ...initialState,
  setName: (name) => set({ name }),
  setLifes: (lifes) => set({ lifes }),
  setPass: (pass) => set({ pass }),
  setModalOption: (option: ModalOptions) => set({ modalOption: option }),
  updateRankData: (rankData) => set({ rankData }),
  updateUserData: (user) => {
    if (!user?.id) return;
    set({
      ...user,
    });
  },

  setIds: async (ids, type) => {
    const id = get().id;
    const lifes = get().lifes;
    const score = get().score;
    const addArr = get()[type];
    const newIDsArray = [...new Set([...addArr, ...ids])];
    const newScore = type === "hitids" ? score + 1 : score - 1;
    const payload = {
      [type]: newIDsArray,
      score: newScore,
      ...(type === "missids" && { lifes: Math.max(lifes - 1, 0) }),
    };
    set(payload);
    if (id) {
      try {
        await api(`${process.env.NEXT_PUBLIC_APP_URL}/api/data/users`, {
          method: "PUT",
          body: JSON.stringify({ id, data: payload }),
        });
      } catch (error: unknown) {
        console.log("Erro ao atualizar usuario", error);
      }
    }
  },
  updateUserDB: async (user) => {
    const id = get().id;
    if (id) {
      try {
        await api(`${process.env.NEXT_PUBLIC_APP_URL}/api/data/users`, {
          method: "PUT",
          body: JSON.stringify({ id, data: user }),
        });
      } catch (error: unknown) {
        console.log("Erro ao atualizar usuario", error);
      }
    }
  },
  setScreen: (screen: TScreen) => set({ screen }),
  setLoginState: (loginState) => set({ loginState }),
  resetStore: () => set(initialState),
}));
