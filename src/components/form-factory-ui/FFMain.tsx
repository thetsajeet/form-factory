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
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function FFMain() {
  const currentFormElement = useStore((state) => state.currentFormElement);
  return (
    <DndProvider backend={HTML5Backend}>
      <ResizablePanelGroup className="flex flex-1 p-0" direction="horizontal">
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
        <ResizablePanel className="bg-slate-50 min-w-[250px] h-full overflow-y-auto">
          <PreviewWindow />
        </ResizablePanel>
      </ResizablePanelGroup>
    </DndProvider>
  );
}
