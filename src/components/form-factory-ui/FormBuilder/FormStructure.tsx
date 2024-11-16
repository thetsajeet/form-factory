"use client";

import { Button } from "@/components/ui/button";
import { InfoIcon, PlusCircleIcon, Trash2Icon, X } from "lucide-react";
import useStore from "@/lib/store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { FormElement } from "@/models/interfaces/FFElements";

export default function FormStructure() {
  const formElements = useStore((state) => state.formElements);
  const removeFormElement = useStore((state) => state.removeFormElement);
  const selectCurrentFormElement = useStore(
    (state) => state.selectCurrentFormElement
  );
  const currentFormElement = useStore((state) => state.currentFormElement);
  const [modalOpen, setModalOpen] = useState<{
    isOpen: boolean;
    metadata: FormElement | null;
  }>({ isOpen: false, metadata: null });

  if (formElements.length === 0)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="border-2 border-zinc-900/25 p-2 bg-slate-200/25 shadow-md shadow-gray-300">
          <ul className="list-decimal list-inside font-normal">
            <span className="font-semibold text block mb-2 italic">
              <InfoIcon className="w-4 h-4 mr-1 inline" />
              To add elements to the form.
            </span>
            <li>Double click the componenets</li>
            <li>
              Use <PlusCircleIcon className="inline w-4 h-4" /> button to add a
              text field
            </li>
            <li>Drag and drop any component</li>
          </ul>
        </div>
      </div>
    );

  function handleRemove(el: FormElement) {
    if (currentFormElement && currentFormElement.id === el.id)
      selectCurrentFormElement(null);
    removeFormElement(el);
    setModalOpen({ isOpen: false, metadata: null });
  }

  function openModal(
    event: React.MouseEvent<HTMLButtonElement>,
    el: FormElement
  ) {
    event.stopPropagation();
    setModalOpen({ isOpen: true, metadata: el });
  }

  function onSelectElement(id: string | number) {
    selectCurrentFormElement(id);
  }

  const formElementsJSX = formElements.map((el) => (
    <div
      key={el.id}
      className="border-2 rounded-sm shadow-sm border-slate-300 h-[50px] my-5 px-2 flex flex-col justify-center"
      onClick={() => onSelectElement(el.id)}
    >
      <div className="w-full flex justify-between">
        <span>{el.label}</span>
        <Button
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            openModal(event, el)
          }
          size="sm"
        >
          <Trash2Icon />
        </Button>
      </div>
    </div>
  ));

  return (
    <div>
      <Dialog open={modalOpen.isOpen}>
        {formElementsJSX}
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="w-full flex">
              <span className="flex-1">
                <DialogTitle>Do you want to delete the field?</DialogTitle>
              </span>
              <span className="justify-self-end">
                <X
                  onClick={() =>
                    setModalOpen({ isOpen: false, metadata: null })
                  }
                  className="h-4 w-4 cursor-pointer"
                />
              </span>
            </div>
            <DialogDescription>
              <span className="font-medium text-sm">Note:</span> This action can
              not be reversed.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-between space-x-2">
            <Button
              onClick={() => handleRemove(modalOpen.metadata as FormElement)}
              type="button"
              className="w-full"
              variant="destructive"
            >
              Delete
            </Button>
            <Button
              onClick={() => setModalOpen({ isOpen: false, metadata: null })}
              type="button"
              className="w-full"
              variant="outline"
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
