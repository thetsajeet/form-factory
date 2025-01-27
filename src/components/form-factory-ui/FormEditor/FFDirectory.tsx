"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useStore from "@/lib/store";
import { Plus } from "lucide-react";
import ComponentList from "./ComponentList";

export default function FFDirectory() {
  const addFormElement = useStore((state) => state.addFormElement);

  return (
    <div className="w-full h-full @container p-2">
      <div className="flex items-center relative">
        <span className="text-lg font-medium flex-1 text-center">
          Components
        </span>
        <Button
          variant="ghost"
          className="text-center right-1"
          onClick={() => addFormElement()}
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      <Separator className="my-2 bg-zinc-800" />
      <ComponentList />
    </div>
  );
}
