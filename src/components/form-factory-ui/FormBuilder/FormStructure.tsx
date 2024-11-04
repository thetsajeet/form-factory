"use client";

import useStore from "@/lib/store";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export default function FormStructure() {
  const { formElements, selectCurrentFormElement } = useStore();

  if (formElements.length === 0)
    return (
      <div className="w-full flex justify-center items-center">
        <InfoCircledIcon className="w-4 h-4 mr-1" />
        Add elements to the form
      </div>
    );

  return formElements.map((el) => (
    <div
      key={el.id}
      className="border-2 rounded-sm shadow-sm border-slate-300 h-[50px] my-5 px-2 flex flex-col justify-center"
      onClick={() => selectCurrentFormElement(el)}
    >
      {el.name}
    </div>
  ));
}
