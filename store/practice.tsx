import { storageSet } from '@/lib/storage';
import { createSelectors } from '@/utils/createSelectors';
import { create } from 'zustand';

interface ProgressScreenState {
  definite: {
    current: number;
    max: number;
  };
  indefinite: {
    current: number;
    max: number;
  };
}

interface AppState {
  progress: ProgressScreenState;
  increment: (option: keyof ProgressScreenState) => void;
  restart: (option: keyof ProgressScreenState) => void;
  setInitialValues: (values: ProgressScreenState) => void;
  reset: (option: keyof ProgressScreenState) => void;
}

const usePracticeStoreBase = create<AppState>()((set) => ({
  progress: {
    definite: {
      current: 0,
      max: 0,
    },
    indefinite: {
      current: 0,
      max: 0,
    },
  },
  increment: (option: keyof ProgressScreenState) => {
    return set((state) => {
      const current = state.progress[option].current + 1;
      const max = state.progress[option].max < current ? current : state.progress[option].max;

      storageSet(`${option}.current`, current).catch(console.error);
      if (current >= max) storageSet(`${option}.max`, max).catch(console.error);

      return {
        progress: {
          ...state.progress,
          [option]: { current, max },
        },
      };
    });
  },
  restart: (option: keyof ProgressScreenState) => {
    return set((state) => {
      const current = 0;
      storageSet(`${option}.current`, 0).catch(console.error);

      return {
        progress: {
          ...state.progress,
          [option]: { ...state.progress[option], current },
        },
      };
    });
  },

  reset: (option: keyof ProgressScreenState) => {
    return set((state) => {
      storageSet(`${option}.current`, 0).catch(console.error);
      storageSet(`${option}.max`, 0).catch(console.error);

      return {
        progress: {
          ...state.progress,
          [option]: { current: 0, max: 0 },
        },
      };
    });
  },

  setInitialValues: (values: ProgressScreenState) => {
    return set(() => ({
      progress: values,
    }));
  },
}));

const usePracticeStore = createSelectors(usePracticeStoreBase);

export default usePracticeStore;
