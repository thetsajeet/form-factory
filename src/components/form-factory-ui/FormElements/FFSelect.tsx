/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export interface FFSelect {
  field: any; // change it
  label: string;
  description: string;
  options: string[];
}

export default function FFSelect({
  field,
  label,
  description,
  options,
}: FFSelect) {
  const selectOptionsJSX = options.map((op: string, index: number) => (
    <SelectItem key={index} value={op}>
      {op}
    </SelectItem>
  ));

  return (
    <FormItem>
      <FormLabel className="font-medium text-lg pl-1">{label}</FormLabel>
      <Select onValueChange={field.onChange} value={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
        </FormControl>
        <SelectContent>{selectOptionsJSX}</SelectContent>
      </Select>
      <FormDescription>{description}</FormDescription>
      <FormMessage />
    </FormItem>
  );
}
