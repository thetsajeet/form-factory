"use client";

import OutputForm from "@/components/form-factory-ui/Preview/OutputForm";
import useStore from "@/lib/store";
// import { useParams } from "next/navigation";

export default function Page({}) {
  const { formTitle, formElements, formDescription } = useStore();
  // const params = useParams<{ form_id: string }>();
  return (
    <div className="flex flex-col flex-1">
      <div className="py-2 text-center text-xl font-semibold uppercase tracking-wide bg-zinc-900 text-white">
        Form Factory
      </div>
      <div className="flex-1 w-full h-full max-w-2xl mx-auto px-2 mt-2">
        <OutputForm
          formTitle={formTitle}
          formElements={formElements}
          formDescription={formDescription}
          preview={false}
        />
      </div>
    </div>
  );
}
