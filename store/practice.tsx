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
  reset: (option: keyof ProgressScreenState) => void;
  setInitialValues: (values: ProgressScreenState) => void;
}

const usePracticeStoreBase = create<AppState>()((set) => ({
  progress: {
    definite: {
      current: 0,
      max: 5,
    },
    indefinite: {
      current: 0,
      max: 0,
    },
  },
  increment: (option: keyof ProgressScreenState) => {
    //TODO: probably good place to use Immer
    return set((state) => {
      const current = state.progress[option].current + 1;
      const max = state.progress[option].max < current ? current : state.progress[option].max;

      return {
        progress: {
          ...state.progress,
          [option]: { current, max },
        },
      };
    });
  },
  reset: (option: keyof ProgressScreenState) => {
    //TODO: probably good place to use Immer
    return set((state) => {
      const current = 0;

      return {
        progress: {
          ...state.progress,
          [option]: { ...state.progress[option], current },
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
