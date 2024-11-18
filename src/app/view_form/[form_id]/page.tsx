"use client";

import OutputForm from "@/components/form-factory-ui/Preview/OutputForm";
import useStore from "@/lib/store";
// import { useParams } from "next/navigation";

export default function Page({}) {
  const { formTitle, formElements, formDescription } = useStore();
  // const params = useParams<{ form_id: string }>();
  return (
    <div>
      <div className="py-2 text-center text-xl font-semibold uppercase tracking-wide">
        Form Factory
      </div>
      <div className="max-w-2xl mx-auto px-2">
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
