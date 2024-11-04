"use client";

import { Button } from "@/components/ui/button";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Trash2Icon } from "lucide-react";
import useStore, { FormElement } from "@/lib/store";

export default function FormStructure() {
  const { formElements, selectCurrentFormElement, removeFormElement } =
    useStore();

  if (formElements.length === 0)
    return (
      <div className="w-full flex justify-center items-center">
        <InfoCircledIcon className="w-4 h-4 mr-1" />
        Add elements to the form
      </div>
    );

  function handleRemove(
    event: React.MouseEvent<HTMLButtonElement>,
    el: FormElement
  ) {
    event?.stopPropagation();
    removeFormElement(el);
  }

  return formElements.map((el) => (
    <div
      key={el.id}
      className="border-2 rounded-sm shadow-sm border-slate-300 h-[50px] my-5 px-2 flex flex-col justify-center"
      onClick={() => selectCurrentFormElement(el)}
    >
      <div className="w-full flex justify-between">
        <span>{el.name}</span>
        <Button
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            handleRemove(event, el)
          }
          size="sm"
        >
          <Trash2Icon />
        </Button>
      </div>
    </div>
  ));
}
