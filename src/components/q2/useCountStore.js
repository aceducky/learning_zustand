import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useCountStore = create(
    devtools(
        (set) => ({
            count: 0,
            increaseCount: () => set((state) => ({ count: state.count + 1 })),
        })
    )
);
