import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { FFSwitchInterface } from "@/models/interfaces/FFElements";

export default function FFSwitch({ field, label }: FFSwitchInterface) {
  return (
    <FormItem className="flex items-center py-1">
      <FormControl>
        <Switch
          {...field}
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      </FormControl>
      {/* TODO: Fix no effect with mt-0 in tailwindcss class */}
      <FormLabel
        className="font-medium text-lg pl-1"
        style={{ marginTop: "0px" }}
      >
        {label}
      </FormLabel>
      <FormMessage />
    </FormItem>
  );
}
