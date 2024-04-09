import { create } from "zustand";

type HeaderState = "light" | "dark";

interface Props {
  headerState: HeaderState;
  setHeaderState: (state: HeaderState) => void;
}

export const useHeaderStore = create<Props>((set) => ({
  headerState: "dark",
  setHeaderState: (state) => set({ headerState: state }),
}));
