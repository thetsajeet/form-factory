"use client";

import { useForm } from "react-hook-form";
import { Form, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { SendHorizonalIcon, Undo2Icon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import FFSelect from "../FormElements/FFSelect";
import FFInput from "../FormElements/FFInput";
import { FormElement } from "@/models/interfaces/FFElements";
import FFTextarea from "../FormElements/FFTextarea";
import FFSwitch from "../FormElements/FFSwitch";

interface OutputForm {
  formTitle: string;
  formDescription: string;
  formElements: FormElement[];
  preview: boolean;
}

// define ouput form type
export default function OutputForm({
  formTitle,
  formDescription,
  formElements,
  preview,
}: OutputForm) {
  const form = useForm({});

  // TODO: Unregister or remove the old labels
  // TODO: Change the data type
  const onSubmit = (data: unknown) => {
    if (preview) console.log("Submitted", data);
  };

  if (formElements.length === 0)
    return (
      <div className="flex w-full h-full justify-center items-center">
        No input found.
      </div>
    );

  const formContent = formElements.map((fe: FormElement) => {
    const { type, id, label, placeholder, defaultValue, options } = fe;

    switch (type) {
      case "text":
      case "email":
      case "number":
      case "url":
      case "password":
        return (
          <FormField
            key={id}
            control={form.control}
            name={label}
            defaultValue={defaultValue || ""}
            render={({ field }) => (
              <FFInput
                field={field}
                label={label}
                type={type}
                placeholder={placeholder}
              />
            )}
          />
        );
      case "select":
        return (
          <FormField
            control={form.control}
            name={label}
            key={id}
            render={({ field }) => (
              <FFSelect
                label={label}
                field={field}
                options={options || []}
                placeholder={placeholder}
              />
            )}
          />
        );
      case "textarea":
        return (
          <FormField
            key={id}
            control={form.control}
            name={label}
            render={({ field }) => (
              <FFTextarea
                label={label}
                field={field}
                placeholder={placeholder}
              />
            )}
          />
        );
      case "switch":
        return (
          <FormField
            control={form.control}
            name={label}
            key={id}
            render={({ field }) => <FFSwitch label={label} field={field} />}
          />
        );
      default:
        return <div key={id}>Unknown input type</div>;
    }
  });

  return (
    <div className="w-full flex flex-col flex-1">
      <div className="w-full text-center capitalize font-semibold text-lg">
        {formTitle}
      </div>
      <div className="mt-2 w-full text-sm font-normal">{formDescription}</div>
      <Separator className="my-4 bg-slate-800" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {formContent}
          <div className="mt-5 flex flex-col space-y-2">
            <Button type="submit">
              Submit <SendHorizonalIcon className="w-5 h-5" />
            </Button>
            <Button
              className="bg-slate-100/25 text-zinc-600/25 hover:bg-slate-100 text-zinc-600"
              type="reset"
            >
              Reset <Undo2Icon className="w-5 h-5" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
