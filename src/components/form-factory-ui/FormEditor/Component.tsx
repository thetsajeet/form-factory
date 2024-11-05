"use client";

import useStore from "@/lib/store";

export interface ComponentInteface {
  name: "text" | "email" | "password" | "select" | "number";
  icon: React.ReactNode;
}

export default function Component({ name, icon }: ComponentInteface) {
  const addFormElement = useStore((state) => state.addFormElement);

  return (
    <div
      className="w-11/12 flex h-[90px] flex-col items-center bg-1 bg-zinc-200 rounded-lg hover:bg-zinc-300 cursor-pointer"
      onClick={() => addFormElement(name)}
    >
      <div className="mt-4 bg-zinc-400/25 rounded-full p-2 inline-block">
        {icon}
      </div>
      <div className="font-medium">{name}</div>
    </div>
  );
}
