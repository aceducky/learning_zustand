import { create } from 'zustand';

export const useColorStore = create((set) => ({
  name: '',
  className: '',
  setName: (_name) => set({ name: _name }),
  setClassName: (_className) => set({ className: _className }),
  
  /*
   setName: (name) => set({ name: name }),
   setClassName: (className) => set({ className: className })
   */
}));
