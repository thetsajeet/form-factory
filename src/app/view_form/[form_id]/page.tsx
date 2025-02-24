"use client";

import OutputForm from "@/components/form-factory-ui/Preview/OutputForm";
import { FormElement } from "@/models/interfaces/FFElements";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({}) {
  const params = useParams<{ form_id: string }>();
  const [form, setForm] = useState<{
    title: string;
    description: string;
    elements: FormElement[];
  } | null>(null);

  useEffect(() => {
    const formJSON = localStorage.getItem(params.form_id);
    if (!formJSON) return;
    const formObj = JSON.parse(formJSON);
    setForm(formObj);
  }, [params.form_id]);

  if (!form) return <div>no form to show</div>;

  return (
    <div className="flex flex-col flex-1 main">
      <Link href="/">
        <div className="py-4 text-center text-2xl font-semibold tracking-tight bg-zinc-900 text-white">
          Form Factory
        </div>
      </Link>
      <div className="flex-1 w-full h-full max-w-2xl mx-auto px-4 mt-2 bg-white shadow-lg border">
        <OutputForm
          formTitle={form.title}
          formElements={form.elements}
          formDescription={form.description}
          preview={false}
        />
      </div>
    </div>
  );
}
