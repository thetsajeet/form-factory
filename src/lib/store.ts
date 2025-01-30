import { create } from "zustand";
import { v4 as uuid } from "uuid";
import { FormElement, FormElementTypes } from "@/models/interfaces/FFElements";

type State = {
  formId: string;
  formTitle: string;
  formDescription: string;
  currentFormElement: FormElement | null;
  formElements: FormElement[];
  count: number;
};

type Action = {
  setFormTitle: (t: string) => void;
  setFormDescription: (d: string) => void;
  addFormElement: (type?: FormElementTypes | null) => void;
  removeFormElement: (element: FormElement) => void;
  selectCurrentFormElement: (id: string | number | null) => void;
  updateFormElement: (element: FormElement) => void;
};

const useStore = create<State & Action>((set, get) => ({
  count: 0,
  formId: "",
  formTitle: "My Form",
  formDescription: "",
  currentFormElement: null,
  formElements: [],
  setFormTitle: (t: string) => set(() => ({ formTitle: t })),
  setFormDescription: (d: string) => set(() => ({ formDescription: d })),
  addFormElement: (type?: FormElementTypes | null) => {
    const elType = type ? type : "text";
    const newElement: FormElement = {
      id: uuid(),
      label: `${elType}-${get().count + 1}`,
      name: `${elType}-${get().count + 1}`,
      type: elType,
      placeholder: "",
      options: [],
    };
    set((state) => ({
      // create form id in server while saving
      formId: state.formId || uuid(),
      count: state.count + 1,
      formElements: [...state.formElements, newElement],
      currentFormElement: newElement,
    }));
  },
  removeFormElement: (el: FormElement) => {
    set((state) => ({
      formElements: [...state.formElements.filter((fe) => fe.id !== el.id)],
    }));
  },
  updateFormElement: (el: FormElement) => {
    const { formElements } = get();
    const updatedEl = formElements.map((fel: FormElement) => {
      if (fel.id === el.id) return el;
      return fel;
    });

    set({ formElements: updatedEl });
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
