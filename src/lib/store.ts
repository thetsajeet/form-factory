import { create } from "zustand";

type FormElement = {
  id: string;
  name: string;
};

type State = {
  formTitle: string;
  formDescription: string;
  currentFormElement: FormElement;
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
  currentFormElement: {} as FormElement,
  formElements: [],
  setFormTitle: (t: string) => set(() => ({ formTitle: t })),
  setFormDescription: (d: string) => set(() => ({ formDescription: d })),
  addFormElement: (el: FormElement) =>
    set((state) => ({ formElements: [...state.formElements, el] })),
  removeFormElement: (el: FormElement) => {},
  selectCurrentFormElement: (el: FormElement) => {},
}));

export default useStore;
