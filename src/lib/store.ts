import { create } from "zustand";

export interface FormElement {
  id: string;
  name: string;
}

type State = {
  formTitle: string;
  formDescription: string;
  currentFormElement: FormElement | null;
  formElements: FormElement[];
};

type Action = {
  setFormTitle: (t: string) => void;
  setFormDescription: (d: string) => void;
  addFormElement: (element: FormElement) => void;
  removeFormElement: (element: FormElement) => void;
  selectCurrentFormElement: (element: FormElement) => void;
};

const useStore = create<State & Action>((set) => ({
  formTitle: "Custom Form",
  formDescription: "Custom Form Description",
  currentFormElement: null,
  formElements: [],
  setFormTitle: (t: string) => set(() => ({ formTitle: t })),
  setFormDescription: (d: string) => set(() => ({ formDescription: d })),
  addFormElement: (el: FormElement) =>
    set((state) => ({ formElements: [...state.formElements, el] })),
  removeFormElement: (el: FormElement) => {
    set((state) => ({
      formElements: [...state.formElements.filter((fe) => fe.id !== el.id)],
    }));
  },
  selectCurrentFormElement: (el: FormElement) =>
    set(() => ({ currentFormElement: el })),
}));

export default useStore;
