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
        <ResizablePanel defaultSize={25} minSize={10} className="bg-zinc-50">
          {currentFormElement ? <EditFormElement /> : <FFDirectory />}
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50} minSize={35} className="main flex-1">
          <div className="py-5 mx-auto w-[500px] min-h-0 h-full">
            <FormBuilder />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize={25}
          minSize={20}
          className="bg-slate-50 h-full"
        >
          <PreviewWindow />
        </ResizablePanel>
      </ResizablePanelGroup>
    </DndProvider>
  );
}
