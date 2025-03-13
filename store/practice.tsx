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
  increment: (option: keyof ProgressScreenState) =>
    //TODO: probably good place to use Immer
    set((state) => {
      const current = state.progress[option].current + 1;
      const max = state.progress[option].max < current ? current : state.progress[option].max;

      return {
        progress: {
          ...state.progress,
          [option]: { current, max },
        },
      };
    }),
  setInitialValues: (values: ProgressScreenState) =>
    set(() => ({
      progress: values,
    })),
}));

const usePracticeStore = createSelectors(usePracticeStoreBase);

export default usePracticeStore;
