import { create } from "zustand";
import { ModalOptions } from "@/components/custom/Modal/modal";
import { LoginState, TScreen, User } from "@/types/types";
import api from "@/utils/api";

type TStoreValues = {
  id: number | null;
  name: string;
  pass: string;
  hitids: number[];
  missids: string[];
  screen: TScreen;
  loginState: LoginState;
  loadingDB: boolean;
  modalOption: ModalOptions;
};

type TStoreFuncs = {
  setName: (name: string) => void;
  setPass: (pass: string) => void;
  setIds: (
    id: number[] | string[],
    type: "hitids" | "missids"
  ) => Promise<void | boolean>;
  updateUserData: (user: User) => Promise<void>;
  setScreen: (screen: TScreen) => void;
  setLoginState: (loginState: LoginState) => void;
  setLoadingDB: (loadingDB: boolean) => void;
  setModalOption: (option: ModalOptions) => void;
  resetStore: () => void;
};

type TStore = TStoreValues & TStoreFuncs;

const initialState: TStoreValues = {
  id: null,
  name: "",
  pass: "",
  modalOption: "none",
  loadingDB: true,
  hitids: [],
  missids: [],
  screen: "login",
  loginState: "login",
};

export const useStore = create<TStore>((set, get) => ({
  ...initialState,
  setLoadingDB: (loadingDB) => set({ loadingDB }),
  setName: (name) => set({ name }),
  setPass: (pass) => set({ pass }),
  setModalOption: (option: ModalOptions) => set({ modalOption: option }),
  updateUserData: async (user) => {
    if (!user?.id) return;
    const { hitids, missids, name, id } = user;
    set({
      id,
      name,
      hitids,
      missids,
      loadingDB: false,
    });
  },
  setIds: async (ids, type) => {
    const id = get().id;
    const addArr = get()[type];
    const newhitids = [...new Set([...addArr, ...ids])];
    const payload = { [type]: newhitids };
    try {
      await api(`${process.env.NEXT_PUBLIC_APP_URL}/api/data/users`, {
        method: "PUT",
        body: JSON.stringify({ id, data: payload }),
      });
      set(payload);
    } catch (error: unknown) {
      console.log("Erro ao atualizar usuario", error);
    }
  },
  setScreen: (screen: TScreen) => set({ screen }),
  setLoginState: (loginState) => set({ loginState }),
  resetStore: () => set(initialState),
}));
