"use client";

import OutputForm from "@/components/form-factory-ui/Preview/OutputForm";
import useStore from "@/lib/store";
import { useParams } from "next/navigation";

export default function Page({}) {
  const { formTitle, formElements, formDescription } = useStore();
  const params = useParams<{ form_id: string }>();
  return (
    <div>
      <OutputForm
        formTitle={formTitle}
        formElements={formElements}
        formDescription={formDescription}
      />
    </div>
  );
}
