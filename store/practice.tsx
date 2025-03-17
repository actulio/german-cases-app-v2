import { storageSet } from '@/lib/storage';
import { createSelectors } from '@/utils/createSelectors';
import { produce } from 'immer';
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
    return set(
      produce((state) => {
        const current = state.progress[option].current + 1;
        const max = state.progress[option].max < current ? current : state.progress[option].max;

        storageSet(`${option}.current`, current).catch(console.error);
        if (current >= max) storageSet(`${option}.max`, max).catch(console.error);

        // Update the state mutably with Immer
        state.progress[option].current = current;
        state.progress[option].max = max;
      }),
    );
  },

  restart: (option: keyof ProgressScreenState) => {
    return set(
      produce((state) => {
        storageSet(`${option}.current`, 0).catch(console.error);
        state.progress[option].current = 0; // Restart to 0
      }),
    );
  },

  reset: (option: keyof ProgressScreenState) => {
    return set(
      produce((state) => {
        storageSet(`${option}.current`, 0).catch(console.error);
        storageSet(`${option}.max`, 0).catch(console.error);
        state.progress[option] = { current: 0, max: 0 }; // Reset current and max to 0
      }),
    );
  },

  setInitialValues: (values: ProgressScreenState) => {
    return set(() => ({
      progress: values,
    }));
  },
}));

const usePracticeStore = createSelectors(usePracticeStoreBase);

export default usePracticeStore;
