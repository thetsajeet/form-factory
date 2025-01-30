"use client";

import { useState } from "react";
import FFFooter from "@/components/form-factory-ui/FFFooter";
import FFormHeader from "@/components/form-factory-ui/FFHeader";
import FFMain from "@/components/form-factory-ui/FFMain";
import Sidebar from "@/components/form-factory-ui/Sidebar";
import useStore from "@/lib/store";
import { trpc } from "@/server/trpc/client";

export default function Home() {
  const [sidebar, toggleSidebar] = useState<boolean>(false);
  const formTitle = useStore((state) => state.formTitle);
  const { data } = trpc.hello.useQuery({ text: formTitle });

  return (
    <div className="flex-1 flex flex-col h-full">
      <Sidebar
        formName={data ? data.greeting : "s"}
        sidebar={sidebar}
        toggleSidebar={toggleSidebar}
      />
      <FFormHeader toggleSidebar={toggleSidebar} />
      <FFMain />
      <FFFooter />
    </div>
  );
}
