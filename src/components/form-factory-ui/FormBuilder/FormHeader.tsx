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
          maxLength={50}
          className="text-center ring-zinc-900 ring-1"
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
          rows={3}
          className="resize-none ring-zinc-900 ring-1"
          onChange={(e) => setFormDescription(e.target.value)}
        />
      </CardDescription>
    </>
  );
}
