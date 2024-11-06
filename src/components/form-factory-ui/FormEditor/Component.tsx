"use client";

import useStore from "@/lib/store";
import { FORM_TYPES } from "@/models/constants/formTypes";
import { FormElementTypes } from "@/models/interfaces/FFElements";
import { useDrag } from "react-dnd";

export interface ComponentInteface {
  name: FormElementTypes;
  icon: React.ReactNode;
}

export default function Component({ name, icon }: ComponentInteface) {
  const addFormElement = useStore((state) => state.addFormElement);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: name,
    item: { name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      className="w-11/12 flex h-[90px] flex-col items-center bg-1 bg-zinc-200 rounded-lg hover:bg-zinc-300 cursor-move"
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
      onDoubleClick={() => addFormElement(name)}
    >
      <div className="mt-4 bg-zinc-400/25 rounded-full p-2 inline-block">
        {icon}
      </div>
      <div className="font-medium">{name}</div>
    </div>
  );
}
