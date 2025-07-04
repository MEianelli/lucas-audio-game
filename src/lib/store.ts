import { create } from "zustand";
import { ModalOptions } from "@/components/custom/Modal/modal";
import { LoginState, RankDataWrapper, TScreen, User } from "@/types/types";
import api from "@/utils/api";

type TStoreValues = {
  screen: TScreen;
  loginState: LoginState;
  modalOption: ModalOptions;
  rankData?: RankDataWrapper;
  currentIndex: number;
} & User;

type TStoreFuncs = {
  setName: (name: string) => void;
  setPass: (pass: string) => void;
  setIds: (id: number[] | string[], type: "hitids" | "missids") => Promise<void | boolean>;
  updateUserData: (user: User) => Promise<void>;
  updateRankData: (rankData: RankDataWrapper) => void;
  setScreen: (screen: TScreen) => void;
  setLoginState: (loginState: LoginState) => void;
  setModalOption: (option: ModalOptions) => void;
  resetStore: () => void;
  setLifes: (lifes: number) => void;
  setCurrentIndex: (index: number) => void;
  goToNext: () => void;
};

type TStore = TStoreValues & TStoreFuncs;

const initialState: TStoreValues = {
  id: 0,
  name: "",
  pass: "",
  lifes: 5,
  score: 0,
  scoreweek: 0,
  currentstreak: 0,
  currentIndex: 0,
  maxstreak: 0,
  maxstreakweek: 0,
  winrate: 0,
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
  updateUserData: async (user) => {
    if (!user?.id) return;
    set({
      ...user,
    });
  },
  setCurrentIndex: (currentIndex) => set({ currentIndex }),
  goToNext: () => setTimeout(() => set((prev) => ({ currentIndex: prev.currentIndex + 1 })), 1000),
  setIds: async (ids, type) => {
    const id = get().id;
    const lifes = get().lifes;
    const score = get().score;
    const newCurrentStreak = get().currentstreak + 1;
    const maxstreak = get().maxstreak;
    const addArr = get()[type];
    const newIDsArray = [...new Set([...addArr, ...ids])];
    const newScore = type === "hitids" ? score + 1 : score - 1;
    const payload = {
      [type]: newIDsArray,
      score: newScore,
      scoreweek: newScore,
      ...(type === "hitids" && {
        currentstreak: newCurrentStreak,
        ...(newCurrentStreak > maxstreak && { maxstreak: newCurrentStreak }),
        ...(newCurrentStreak > maxstreak && { maxstreakweek: newCurrentStreak }),
      }),
      ...(type === "missids" && { currentstreak: 0 }),
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
  setScreen: (screen: TScreen) => set({ screen }),
  setLoginState: (loginState) => set({ loginState }),
  resetStore: () => set(initialState),
}));
