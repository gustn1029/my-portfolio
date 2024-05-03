import { create } from "zustand";

interface IsMountProps {
  isMount: boolean;
  setIsMount: (isMount: boolean) => void;
}

interface UsePositionProps {
  topPosition: number;
  wrapHeight: number;
  setTopPosition: (topPosition: number) => void;
  setWrapHeight: (wrapHeight: number) => void;
}

interface UseMainSelectedProps {
  mainSelect: boolean;
  setMainSelected: (selected: boolean) => void;
}

export const useIsMountStore = create<IsMountProps>()((set) => ({
  isMount: false,
  setIsMount: (isMount) => set({ isMount }),
}));

export const useAboutPositionStore = create<UsePositionProps>()((set) => ({
    topPosition: 0,
    wrapHeight: 0,
    setTopPosition: (topPosition) => set({topPosition}),
    setWrapHeight: (wrapHeight) => set({wrapHeight}),
}));

export const useSkillPositionStore = create<UsePositionProps>()((set) => ({
    topPosition: 0,
    wrapHeight: 0,
    setTopPosition: (topPosition) => set({topPosition}),
    setWrapHeight: (wrapHeight) => set({wrapHeight}),
}));

export const useContactPositionStore = create<UsePositionProps>()((set) => ({
  topPosition: 0,
  wrapHeight: 0,
  setTopPosition: (topPosition) => set({topPosition}),
  setWrapHeight: (wrapHeight) => set({wrapHeight}),
}));

export const useMainSelectedStore = create<UseMainSelectedProps>()((set) => ({
  mainSelect: false,
  setMainSelected: (mainSelect) => set({mainSelect}),
}));