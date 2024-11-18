"use client";

import useStore from "@/lib/store";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import FFSelect from "../FormElements/FFSelect";
import FFInput from "../FormElements/FFInput";
import { X } from "lucide-react";
import { FormElement } from "@/models/interfaces/FFElements";
import { FORM_TYPES } from "@/models/constants/formTypes";

export default function EditFormElement() {
  const currentFormElement = useStore((state) => state.currentFormElement);
  const updateFormElement = useStore((state) => state.updateFormElement);
  const selectCurrentFormElement = useStore(
    (state) => state.selectCurrentFormElement
  );
  const availableTypeOptions = Object.values(FORM_TYPES);

  const form = useForm({
    values: {
      id: currentFormElement!.id,
      label: currentFormElement!.label,
      name: currentFormElement!.name,
      type: currentFormElement!.type || "text",
      placeholder: currentFormElement!.placeholder || "",
      options: (currentFormElement?.options || []).join(";"),
      defaultValue: currentFormElement?.defaultValue || "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    if (!data) return;

    const finalData: FormElement = {
      id: data["id"],
      label: data["label"],
      name: data["name"],
      type: data["type"],
    };

    for (const [key, value] of Object.entries(data)) {
      if (key === "options") {
        if (data.type !== "select") continue;

        const ops = value as string;
        finalData["options"] = ops ? ops.split(";") : [];
        continue;
      }
      if (key === "placeholder" && data.type !== "switch")
        finalData[key] = value as string;
      if (key === "defaultValue" && data.type !== "switch")
        finalData[key] = value as string;
    }

    updateFormElement(finalData as FormElement);
  };

  return (
    <div className="w-full p-2">
      <div className="flex items-center">
        <span className="text-lg font-medium flex-1 text-center">
          Set form parameters
        </span>
        <Button variant="ghost" onClick={() => selectCurrentFormElement(null)}>
          <X className="w-4 h-4" />
        </Button>
      </div>
      <Separator className="bg-zinc-900 my-2" />
      <div className="space-y-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FFSelect
                  field={field}
                  label="Type"
                  description="Please select the field type"
                  options={availableTypeOptions}
                />
              )}
            />
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FFInput
                  description="Please enter the field label"
                  label="Label"
                  field={field}
                  type="text"
                />
              )}
            />
            {form.watch("type") !== "switch" && (
              <FormField
                control={form.control}
                name="placeholder"
                render={({ field }) => (
                  <FFInput
                    description="Please enter the field placeholder"
                    label="Placeholder"
                    field={field}
                    type="text"
                  />
                )}
              />
            )}
            {form.watch("type") === "select" && (
              <FormField
                control={form.control}
                name="options"
                render={({ field }) => (
                  <FFInput
                    description="Enter a list of options separated by ;"
                    label="Options"
                    field={field}
                    type="text"
                  />
                )}
              />
            )}
            <div className="mx-4">
              <Button className="w-full" type="submit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
