"use client";

import FFFooter from "@/components/form-factory-ui/FFFooter";
import FFormHeader from "@/components/form-factory-ui/FFHeader";
import FFMain from "@/components/form-factory-ui/FFMain";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="py-2 text-center text-xl font-semibold uppercase tracking-wide">
        Form Factory
      </div>
      <FFormHeader />
      <FFMain />
      <FFFooter />
    </div>
  );
}
