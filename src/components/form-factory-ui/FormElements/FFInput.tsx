import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FFInputInterface } from "@/models/interfaces/FFElements";

export default function FFInput({
  field,
  description,
  label,
  type,
}: FFInputInterface) {
  return (
    <FormItem>
      <FormLabel className="font-medium text-lg pl-1">{label}</FormLabel>
      <FormControl>
        <Input {...field} type={type} />
      </FormControl>
      <FormDescription>{description}</FormDescription>
      <FormMessage />
    </FormItem>
  );
}
