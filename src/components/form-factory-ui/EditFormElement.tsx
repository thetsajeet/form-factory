"use client";

import useStore, { FormElement } from "@/lib/store";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";

export default function EditFormElement() {
  const currentFormElement = useStore((state) => state.currentFormElement);
  const updateFormElement = useStore((state) => state.updateFormElement);

  const form = useForm({
    values: {
      id: currentFormElement!.id,
      label: currentFormElement!.label,
      type: currentFormElement!.type || "text",
      placeholder: currentFormElement!.placeholder || "",
    },
  });

  const onSubmit = (data: unknown) => {
    console.log(data);
    updateFormElement(data as FormElement);
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
                <FormItem>
                  <FormLabel className="font-medium text-lg pl-1">
                    Type
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="text">text</SelectItem>
                      <SelectItem value="password">password</SelectItem>
                      <SelectItem value="email">email</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Please select the type of the field.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-lg pl-1">
                    Label
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    Please enter the label for the field.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="placeholder"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-lg pl-1">
                    Placeholder
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    Please enter the placeholder for the field.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
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
