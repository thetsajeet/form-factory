"use client";

import { Plus } from "lucide-react";
import { Button } from "../../ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../../ui/card";
import useStore from "@/lib/store";
import FormStructure from "./FormStructure";
import FormHeader from "./FormHeader";
import { Separator } from "@/components/ui/separator";

export default function FormBuilder() {
  const { addFormElement } = useStore();

  const handleAddElement = () => {
    addFormElement({
      id: `${Math.floor(Math.random() * 10000000)}`,
      name: "first name",
    });
  };

  return (
    <Card>
      <CardHeader>
        <FormHeader />
      </CardHeader>
      <Separator className="my-2" />
      <CardContent>
        <FormStructure />
      </CardContent>
      <Separator className="my-2" />
      <CardFooter>
        <div className="w-full mt-2 flex justify-center">
          <Button onClick={handleAddElement}>
            <Plus />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
