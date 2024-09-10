import { create } from "zustand";

interface CounterStore {
    counter: number;
    max: number;
    increament: () => void;
    reset: () => void;
}


const useCounterStore = create<CounterStore>(set => ({
    counter: 0,
    max: 5,
    increament: () => set(store => ({ counter: store.counter + 1 })),
    reset: () => set(() => ({ max: 10 }))
}))

export default useCounterStore