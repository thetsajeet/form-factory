"use client";

import {
  ArrowDown01Icon,
  AtSign,
  Globe2Icon,
  LetterTextIcon,
  MenuIcon,
  SquareAsterisk,
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
  ];

  return (
    <div className="py-2 space-y-1 grid grid-cols-1 @sm:grid-cols-2 content-start justify-items-center bg-zinc-100 ">
      {components.map((comp: ComponentInteface, index: number) => (
        <Component key={index} name={comp.name} icon={comp.icon} />
      ))}
    </div>
  );
}
