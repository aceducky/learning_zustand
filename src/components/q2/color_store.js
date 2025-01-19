import { create } from "zustand";
import { colors_list } from "./colors_list";

export const useColorStore = create((set) => ({
    bgColor: "",
    className: "",
    setBgColor: (bgColor) => {
        if (colors_list.some((color) => color.bgColor === bgColor)) throw new Error(`${bgColor} is not in color list`);
        set(bgColor);
    },
    setClassName: (className) => {
        if (colors_list.some((color) => color.className === className)) throw new Error(`${className} is not in color list`);
        set(className);
    }
}))