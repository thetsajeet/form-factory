"use client";

import { Card, CardHeader, CardContent, CardFooter } from "../../ui/card";
import FormStructure from "./FormStructure";
import FormHeader from "./FormHeader";
import { Separator } from "@/components/ui/separator";
import { FORM_TYPES } from "@/models/constants/formTypes";
import { useDrop } from "react-dnd";
import useStore from "@/lib/store";
import { FormElementTypes } from "@/models/interfaces/FFElements";
import { cn } from "@/lib/utils";

export default function FormBuilder() {
  const addFormElement = useStore((state) => state.addFormElement);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: Object.values(FORM_TYPES),
    drop: (item: { name: FormElementTypes }) => addFormElement(item.name),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className="contents">
      <Card className="flex flex-col my-2 h-full min-h-0">
        <CardHeader>
          <FormHeader />
        </CardHeader>
        <Separator className="my-2" />
        <CardContent
          className={cn(
            "pb-0",
            "min-h-0 flex-1 overflow-y-auto",
            isOver
              ? "border-2 border-dashed border-zinc-900/50 bg-slate-400/25"
              : ""
          )}
        >
          <FormStructure />
        </CardContent>
        <Separator className="my-2" />
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
