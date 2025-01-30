"use client";

import OutputForm from "@/components/form-factory-ui/Preview/OutputForm";
import { FormElement } from "@/models/interfaces/FFElements";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({}) {
  const params = useParams<{ form_id: string }>();
  const [formElements, setFormElements] = useState<FormElement[]>(
    [] as FormElement[]
  );
  const [formMetadata, setFormMetadata] = useState<{
    formTitle: string;
    formDescription: string;
  }>({ formTitle: "", formDescription: "" });

  useEffect(() => {
    const jsonString = sessionStorage.getItem(params.form_id);
    if (!jsonString) return;
    const data = JSON.parse(jsonString);
    setFormElements(data.formElements);
    setFormMetadata(data.formMetadata);
  }, [params]);

  return (
    <div className="flex flex-col flex-1 main">
      <Link href="/">
        <div className="py-4 text-center text-2xl font-semibold tracking-tight bg-zinc-900 text-white">
          Form Factory
        </div>
      </Link>
      <div className="flex-1 w-full h-full max-w-2xl mx-auto px-4 mt-2 bg-white shadow-lg border">
        <OutputForm
          formTitle={formMetadata.formTitle}
          formElements={formElements}
          formDescription={formMetadata.formDescription}
          preview={false}
        />
      </div>
    </div>
  );
}
