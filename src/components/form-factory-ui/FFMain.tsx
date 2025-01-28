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
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function FFMain() {
  const currentFormElement = useStore((state) => state.currentFormElement);
  const [viewScreen, setViewScreen] = useState("form-builder");

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="hidden h-full lg:flex lg:flex-1 overflow-y-hidden">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel
            defaultSize={27}
            minSize={20}
            maxSize={32}
            className="bg-zinc-50 h-full overflow-y-hidden"
          >
            {currentFormElement ? <EditFormElement /> : <FFDirectory />}
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50} minSize={30} className="main">
            <FormBuilder />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={23} minSize={20} maxSize={32}>
            <PreviewWindow />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <div className="lg:hidden flex-1 flex flex-col main">
        {viewScreen === "form-builder" && <FormBuilder />}
        {viewScreen === "form-preview" && <PreviewWindow />}
        {viewScreen === "form-directory" &&
          (currentFormElement ? <EditFormElement /> : <FFDirectory />)}
        <div className="mt-2 w-full flex flex-row text-zinc-200 bg-zinc-800 divide-x text-md md:justify-between">
          <span
            className={cn(
              "px-2 cursor-pointer py-2 hover:bg-zinc-300 hover:text-zinc-700 transition duration-100 font-semibold w-full text-center",
              viewScreen === "form-directory" && "bg-zinc-200 text-zinc-800"
            )}
            onClick={() => setViewScreen("form-directory")}
          >
            Components
          </span>
          <span
            className={cn(
              "px-2 cursor-pointer py-2 hover:bg-zinc-300 hover:text-zinc-700 transition duration-100 font-semibold w-full text-center",
              viewScreen === "form-builder" && "bg-zinc-200 text-zinc-800"
            )}
            onClick={() => setViewScreen("form-builder")}
          >
            Builder
          </span>
          <span
            className={cn(
              "px-2 cursor-pointer py-2 hover:bg-zinc-300 hover:text-zinc-700 transition duration-100 font-semibold w-full text-center",
              viewScreen === "form-preview" && "bg-zinc-200 text-zinc-800"
            )}
            onClick={() => setViewScreen("form-preview")}
          >
            Preview
          </span>
        </div>
      </div>
    </DndProvider>
  );
}
