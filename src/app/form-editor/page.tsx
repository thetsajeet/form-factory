"use client";

import { useState } from "react";
import FFFooter from "@/components/form-factory-ui/FFFooter";
import FFormHeader from "@/components/form-factory-ui/FFHeader";
import FFMain from "@/components/form-factory-ui/FFMain";
import Sidebar from "@/components/form-factory-ui/Sidebar";
import useStore from "@/lib/store";

export default function Home() {
  const [sidebar, toggleSidebar] = useState<boolean>(false);
  const formTitle = useStore((state) => state.formTitle);

  return (
    <div className="flex-1 flex flex-col h-full">
      <Sidebar
        formName={formTitle}
        sidebar={sidebar}
        toggleSidebar={toggleSidebar}
      />
      <FFormHeader toggleSidebar={toggleSidebar} />
      <FFMain />
      <FFFooter />
    </div>
  );
}
