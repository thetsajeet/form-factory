"use client";

import useStore, { FormElement } from "@/lib/store";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import FFSelect from "./FormElements/FFSelect";
import FFInput from "./FormElements/FFInput";

export default function EditFormElement() {
  const currentFormElement = useStore((state) => state.currentFormElement);
  const updateFormElement = useStore((state) => state.updateFormElement);

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

        const ops = (value as string) || "";
        finalData["options"] = ops.split(";");
        continue;
      }
      if (key === "placeholder" || key === "defaultValue")
        finalData[key] = value as string;
    }

    updateFormElement(finalData as FormElement);
  };

  return (
    <div className="w-full p-2">
      <div className="text-lg text-center font-medium">Set form parameters</div>
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
                  options={["text", "email", "password", "select"]}
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
