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
import { FFSelectInterface } from "@/models/interfaces/FFElements";

export default function FFSelect({
  field,
  label,
  description,
  options,
  placeholder,
}: FFSelectInterface) {
  console.log(options);
  const selectOptionsJSX = options.length ? (
    options.map((op: string, index: number) => (
      <SelectItem key={index} value={op}>
        {op}
      </SelectItem>
    ))
  ) : (
    <SelectItem key={0} value={"none"}>
      No options to show
    </SelectItem>
  );

  return (
    <FormItem>
      <FormLabel className="font-medium text-lg pl-1">{label}</FormLabel>
      <Select onValueChange={field.onChange} value={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>{selectOptionsJSX}</SelectContent>
      </Select>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
}
