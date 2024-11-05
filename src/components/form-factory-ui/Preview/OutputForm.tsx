"use client";

import useStore, { FormElement } from "@/lib/store";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { SendHorizonalIcon, Undo2Icon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function OutputForm() {
  const formTitle = useStore((state) => state.formTitle);
  const formDescription = useStore((state) => state.formDescription);
  const formElements = useStore((state) => state.formElements);

  const form = useForm({});

  // TODO: Unregister or remove the old labels
  const onSubmit = (data: unknown) => {
    console.log("c", data);
  };

  if (formElements.length === 0)
    return (
      <div className="flex w-full h-full justify-center items-center">
        No input found.
      </div>
    );

  const formContent = formElements.map((fe: FormElement) => {
    const { type, id, label, placeholder } = fe;
    switch (type) {
      case "text":
      case "email":
      case "password":
        return (
          <FormField
            key={id}
            control={form.control}
            name={label}
            defaultValue=""
            render={({ field }) => (
              <FormItem className="my-1">
                <FormLabel className="font-medium text-lg pl-1">
                  {label}
                </FormLabel>
                <FormControl>
                  <Input type={type} placeholder={placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      case "select":
        return <div key={id}>Select field</div>;
      default:
        return <div key={id}>Unknown input type</div>;
    }
  });

  return (
    <div className="w-full flex flex-col">
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
