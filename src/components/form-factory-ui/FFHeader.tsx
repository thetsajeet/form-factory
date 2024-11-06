"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import useStore from "@/lib/store";

export default function FFHeader() {
  const { formTitle } = useStore();

  return (
    <div className="w-full py-2 px-5 text-sm flex text-zinc-200 bg-zinc-800 items-center justify-between">
      {/* form header */}
      <span>
        <span className="font-semibold">My Form</span> /{" "}
        <span className="font-bold text-md">{formTitle}</span>
      </span>
      <Button size="sm" variant="outline" className="text-zinc-700">
        Publish <ArrowRight />
      </Button>
    </div>
  );
}
