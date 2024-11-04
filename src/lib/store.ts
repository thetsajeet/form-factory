import { randomUUID } from "crypto";
import { create } from "zustand";

export interface FormElement {
  id: string | number;
  label: string;
  type: string;
  placeholder: string;
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
  addFormElement: () => void;
  removeFormElement: (element: FormElement) => void;
  selectCurrentFormElement: (id: string | number) => void;
  updateFormElement: (element: FormElement) => void;
};

const useStore = create<State & Action>((set, get) => ({
  formTitle: "Custom Form",
  formDescription: "Custom Form Description",
  currentFormElement: null,
  formElements: [],
  setFormTitle: (t: string) => set(() => ({ formTitle: t })),
  setFormDescription: (d: string) => set(() => ({ formDescription: d })),
  addFormElement: () => {
    const newElement: FormElement = {
      id: `label-${get().formElements.length}`,
      label: `label-${get().formElements.length}`,
      type: "text",
      placeholder: "",
    };
    set((state) => ({ formElements: [...state.formElements, newElement] }));
  },
  removeFormElement: (el: FormElement) => {
    set((state) => ({
      formElements: [...state.formElements.filter((fe) => fe.id !== el.id)],
    }));
  },
  updateFormElement: (el: FormElement) => {
    const data = get().formElements;
    const ind = data.findIndex((d) => d.id === el.id);
    if (ind === -1) return;

    const updateItems: FormElement[] = [
      ...data.slice(0, ind),
      { ...el },
      ...data.slice(ind + 1),
    ];

    set({ formElements: updateItems });
  },
  selectCurrentFormElement: (id: string | number) => {
    const index = get().formElements.findIndex((fe) => fe.id === id);
    if (index === -1) return;

    const element = get().formElements[index];
    console.log(index);
    set(() => ({
      currentFormElement: {
        ...element,
      },
    }));
  },
}));

export default useStore;
