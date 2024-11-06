"use client";

import {
  ArrowDown01Icon,
  AtSign,
  LetterTextIcon,
  SquareAsterisk,
  Type,
} from "lucide-react";
import Component, { ComponentInteface } from "./Component";
import { DropdownMenuIcon } from "@radix-ui/react-icons";

export default function ComponentList() {
  const components: ComponentInteface[] = [
    {
      name: "text",
      icon: <Type color="#09090B" />,
    },
    {
      name: "email",
      icon: <AtSign color="#09090B" />,
    },
    {
      name: "password",
      icon: <SquareAsterisk color="#09090B" />,
    },
    {
      name: "select",
      icon: <DropdownMenuIcon color="#09090B" />,
    },
    {
      name: "textarea",
      icon: <LetterTextIcon color="#09090B" />,
    },
    {
      name: "number",
      icon: <ArrowDown01Icon color="#09090B" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 @sm:grid-cols-2 content-start justify-items-center gap-y-2 bg-zinc-100 py-4 h-full overflow-y-auto">
      {components.map((comp: ComponentInteface, index: number) => (
        <Component key={index} name={comp.name} icon={comp.icon} />
      ))}
    </div>
  );
}
