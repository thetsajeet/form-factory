"use client";

import OutputForm from "@/components/form-factory-ui/Preview/OutputForm";
import useStore from "@/lib/store";
import Link from "next/link";
// import { useParams } from "next/navigation";

export default function Page({}) {
  const { formTitle, formElements, formDescription } = useStore();
  // const params = useParams<{ form_id: string }>();
  return (
    <div className="flex flex-col flex-1 main">
      <Link href="/">
        <div className="py-4 text-center text-2xl font-semibold tracking-tight bg-zinc-900 text-white">
          Form Factory
        </div>
      </Link>
      <div className="flex-1 w-full h-full max-w-2xl mx-auto px-4 mt-2 bg-white shadow-lg border">
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
