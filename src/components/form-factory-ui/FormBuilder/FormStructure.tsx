"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowDown01Icon,
  AtSignIcon,
  Edit3Icon,
  Globe2Icon,
  InfoIcon,
  LetterTextIcon,
  MenuIcon,
  PlusCircleIcon,
  SquareAsteriskIcon,
  ToggleLeftIcon,
  Trash2Icon,
  TypeIcon,
  X,
} from "lucide-react";
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

  if (!formElements.length)
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

  function openModal(event: React.MouseEvent<HTMLDivElement>, el: FormElement) {
    event.stopPropagation();
    setModalOpen({ isOpen: true, metadata: el });
  }

  function onSelectElement(id: string | number) {
    selectCurrentFormElement(id);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const componentIconDict: any = {
    text: <TypeIcon color="#09090B" />,
    email: <AtSignIcon color="#09090B" />,
    password: <SquareAsteriskIcon color="#09090B" />,
    select: <MenuIcon color="#09090B" />,
    textarea: <LetterTextIcon color="#09090B" />,
    number: <ArrowDown01Icon color="#09090B" />,
    url: <Globe2Icon color="#09090B" />,
    switch: <ToggleLeftIcon color="#09090B" />,
  };

  const formElementsJSX = formElements.map((el, index) => (
    <div
      key={el.id}
      className="border-2 rounded-sm shadow-sm border-slate-700/75 h-[75px] my-5 flex flex-col hover:scale-105 transition-all"
    >
      <div className="w-full h-full flex justify-between">
        <div className="flex items-start">
          <div className="block text-center rounded-br-md bg-slate-800 text-slate-100 px-3 py-1">
            {index + 1}
          </div>
        </div>
        <div className="self-center flex-1 pl-5">
          <div className="flex items-center">
            <span className="mr-2 p-2 rounded-full bg-zinc-400">
              {componentIconDict[el.type]}
            </span>
            <span>{el.label}</span>
          </div>
        </div>
        <div className="flex items-start">
          <div
            onClick={() => onSelectElement(el.id)}
            className="block border border-t-0 border-r-0 border-slate-800 text-center bg-slate-300 hover:bg-slate-800 hover:text-slate-100 cursor-pointer px-1"
          >
            <Edit3Icon className="w-4" />
          </div>
          <div
            onClick={(event: React.MouseEvent<HTMLDivElement>) =>
              openModal(event, el)
            }
            className="block border border-t-0 border-r-0 border-slate-800 text-center bg-slate-300 hover:bg-slate-800 hover:text-slate-100 cursor-pointer px-1"
          >
            <Trash2Icon className="w-4" />
          </div>
        </div>
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
