"use client";

import { Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useState } from "react";
import { Button } from "../ui/button";

const CustomFormStructure = ({ elements }: { elements: React.ReactNode[] }) => {
  return elements.map((e, index) => (
    <div
      key={index}
      className="border-2 rounded-sm shadow-sm border-slate-300 h-[50px] my-5 px-2 flex flex-col justify-center"
    >
      Name of the field
    </div>
  ));
};

export default function FFMain() {
  // eslint-disable-next-line prefer-const
  const [formElements, setFormElements] = useState<string[]>(["y", "z"]);

  function addFormElement() {
    setFormElements((prev) => {
      return [...prev, "x"];
    });
  }

  return (
    <div className="flex flex-1">
      <div className="bg-zinc-400 w-[200px]">edit field of the form</div>
      <div className="main flex-1">
        <div className="pt-5 mx-auto w-[500px]">
          <Card>
            <CardHeader>
              <CardTitle>Shopping Form</CardTitle>
              <CardDescription>This is a shopping form</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <CustomFormStructure elements={formElements} />
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full flex justify-center">
                <Button onClick={addFormElement}>
                  <Plus />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="bg-zinc-400 w-[200px]">final form display</div>
    </div>
  );
}
