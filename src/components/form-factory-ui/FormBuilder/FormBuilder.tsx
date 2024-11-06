"use client";

import { Card, CardHeader, CardContent, CardFooter } from "../../ui/card";
import FormStructure from "./FormStructure";
import FormHeader from "./FormHeader";
import { Separator } from "@/components/ui/separator";
import { FORM_TYPES } from "@/models/constants/formTypes";
import { useDrop } from "react-dnd";
import useStore from "@/lib/store";
import { FormElementTypes } from "@/models/interfaces/FFElements";

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
    <Card className="my-2">
      <CardHeader>
        <FormHeader />
      </CardHeader>
      <Separator className="my-2" />
      <CardContent className="pb-0">
        <div className="contents" ref={drop}>
          <FormStructure />
        </div>
      </CardContent>
      <Separator className="my-2" />
      <CardFooter></CardFooter>
    </Card>
  );
}
