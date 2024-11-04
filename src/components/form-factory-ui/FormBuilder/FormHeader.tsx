import { CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useStore from "@/lib/store";

export default function FormHeader() {
  const { formTitle, formDescription, setFormTitle, setFormDescription } =
    useStore();

  return (
    <>
      <CardTitle>
        <Input
          value={formTitle}
          id="formTitle"
          name="formTitle"
          required
          placeholder="Add a title for the form"
          onChange={(e) => setFormTitle(e.target.value)}
        />
      </CardTitle>
      <CardDescription>
        <Textarea
          value={formDescription}
          id="formDescription"
          name="formDescription"
          placeholder="Add a description for the form"
          required
          onChange={(e) => setFormDescription(e.target.value)}
        />
      </CardDescription>
    </>
  );
}
