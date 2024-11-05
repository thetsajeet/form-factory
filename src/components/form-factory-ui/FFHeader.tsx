"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import useStore from "@/lib/store";

export default function FFHeader() {
  const { formTitle } = useStore();

  return (
    <div className="w-full py-2 px-5 flex bg-zinc-100 align-center justify-between">
      {/* form header */}
      <span>My Form / {formTitle}</span>
      <Button size="sm">
        Publish <ArrowRight />
      </Button>
    </div>
  );
}
