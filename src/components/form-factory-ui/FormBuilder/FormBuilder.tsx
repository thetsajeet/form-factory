"use client";

import { Card, CardHeader, CardContent, CardFooter } from "../../ui/card";
import FormStructure from "./FormStructure";
import FormHeader from "./FormHeader";
import { Separator } from "@/components/ui/separator";

export default function FormBuilder() {
  return (
    <Card className="my-2">
      <CardHeader>
        <FormHeader />
      </CardHeader>
      <Separator className="my-2" />
      <CardContent className="pb-0">
        <FormStructure />
      </CardContent>
      <Separator className="my-2" />
      <CardFooter></CardFooter>
    </Card>
  );
}
