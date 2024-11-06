"use client";

import useStore from "@/lib/store";
import EditFormElement from "./FormEditor/EditFormElement";
import FormBuilder from "./FormBuilder/FormBuilder";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import PreviewWindow from "./Preview/PreviewWindow";
import FFDirectory from "./FormEditor/FFDirectory";

export default function FFMain() {
  const currentFormElement = useStore((state) => state.currentFormElement);
  return (
    <ResizablePanelGroup className="flex flex-1" direction="horizontal">
      <ResizablePanel className="bg-zinc-50 min-w-[250px]">
        {currentFormElement ? <EditFormElement /> : <FFDirectory />}
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="main flex-1 min-w-[500px] ">
        <div className="pt-5 mx-auto w-[500px] h-full overflow-y-auto">
          <FormBuilder />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="bg-slate-50 min-w-[250px] h-full">
        <PreviewWindow />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
