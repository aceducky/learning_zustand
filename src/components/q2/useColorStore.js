import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useColorStore = create(
    devtools(
        (set) => ({
            name: "",
            className: "",
            setName: (_name) => set({ name: _name }),
            setClassName: (_className) => set({ className: _className }),
            /*
                           setName: (name) => set({ name: name })
                           setClassName: (className) => set({ className: className })
                           
                           Or
                           
                           setName: (name) => set({ name})
                            setClassName: (className) => set({ className }) 
                           */
        })
    )
);
