"use client";
import useStore from "@/lib/store";
import EditFormElement from "./EditFormElement";
import FormBuilder from "./FormBuilder/FormBuilder";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function Example() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>One</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>Two</ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default function FFMain() {
  const currentFormElement = useStore((state) => state.currentFormElement);

  return (
    <ResizablePanelGroup className="flex flex-1" direction="horizontal">
      <ResizablePanel className="bg-zinc-50 min-w-[250px]">
        {currentFormElement ? (
          <EditFormElement />
        ) : (
          <div className="w-full p-2">
            <div className="w-full flex justify-center items-center text-lg font-medium">
              <InfoCircledIcon className="w-4 h-4 mr-1" />
              Select an element to edit
            </div>
          </div>
        )}
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="main flex-1 min-w-[500px]">
        <div className="pt-5 mx-auto w-[500px]">
          <FormBuilder />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="bg-zinc-50 min-w-[250px]">
        <div className="w-full p-2">
          <div className="w-full flex justify-center items-center text-lg font-medium">
            <InfoCircledIcon className="w-4 h-4 mr-1" />
            Form visible to users
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
