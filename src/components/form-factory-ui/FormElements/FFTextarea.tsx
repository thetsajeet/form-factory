import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FFTextareaInterface } from "@/models/interfaces/FFElements";

export default function FFTextarea({
  field,
  description,
  label,
  placeholder,
}: FFTextareaInterface) {
  return (
    <FormItem>
      <FormLabel className="font-medium text-lg pl-1">{label}</FormLabel>
      <FormControl>
        <Textarea {...field} placeholder={placeholder} />
      </FormControl>
      <FormDescription>{description}</FormDescription>
      <FormMessage />
    </FormItem>
  );
}
