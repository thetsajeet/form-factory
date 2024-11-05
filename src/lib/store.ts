import { create } from "zustand";
import { v4 as uuid } from "uuid";

export interface FormElement {
  id: string | number;
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  options?: string[];
  defaultValue?: string;
}

type State = {
  formTitle: string;
  formDescription: string;
  currentFormElement: FormElement | null;
  formElements: FormElement[];
  count: number;
};

type Action = {
  setFormTitle: (t: string) => void;
  setFormDescription: (d: string) => void;
  addFormElement: (
    type?: "text" | "email" | "password" | "select" | "number" | null
  ) => void;
  removeFormElement: (element: FormElement) => void;
  selectCurrentFormElement: (id: string | number | null) => void;
  updateFormElement: (element: FormElement) => void;
};

const useStore = create<State & Action>((set, get) => ({
  count: 0,
  formTitle: "Custom Form",
  formDescription: "Custom Form Description",
  currentFormElement: null,
  formElements: [],
  setFormTitle: (t: string) => set(() => ({ formTitle: t })),
  setFormDescription: (d: string) => set(() => ({ formDescription: d })),
  addFormElement: (
    type?: "text" | "email" | "password" | "select" | "number" | null
  ) => {
    const newElement: FormElement = {
      id: uuid(),
      label: `label-${get().count + 1}`,
      name: `label-${get().count + 1}`,
      type: type ? type : "text",
      placeholder: "",
      options: [],
    };
    set((state) => ({
      count: state.count + 1,
      formElements: [...state.formElements, newElement],
    }));
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
  selectCurrentFormElement: (id: string | number | null) => {
    if (!id) return set(() => ({ currentFormElement: null }));

    const index = get().formElements.findIndex((fe) => fe.id === id);
    if (index === -1) return;

    const element = get().formElements[index];
    set(() => ({
      currentFormElement: {
        ...element,
      },
    }));
  },
}));

export default useStore;
