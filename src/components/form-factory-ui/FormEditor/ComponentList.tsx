"use client";

import {
  ArrowDown01Icon,
  AtSign,
  Globe2Icon,
  LetterTextIcon,
  MenuIcon,
  SquareAsterisk,
  ToggleLeftIcon,
  Type,
} from "lucide-react";
import Component, { ComponentInteface } from "./Component";

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
      icon: <MenuIcon color="#09090B" />,
    },
    {
      name: "textarea",
      icon: <LetterTextIcon color="#09090B" />,
    },
    {
      name: "number",
      icon: <ArrowDown01Icon color="#09090B" />,
    },
    {
      name: "url",
      icon: <Globe2Icon color="#09090B" />,
    },
    {
      name: "switch",
      icon: <ToggleLeftIcon color="#09090B" />,
    },
  ];

  return (
    <div className="flex-1 pt-2 pb-20 overflow-y-auto grid grid-cols-1 @sm:grid-cols-2 space-y-1 content-start justify-items-center bg-zinc-100 ">
      {components.map((comp: ComponentInteface, index: number) => (
        <Component key={index} name={comp.name} icon={comp.icon} />
      ))}
    </div>
  );
}
