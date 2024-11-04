"use client";
import useStore from "@/lib/store";
import EditFormElement from "./EditFormElement";
import FormBuilder from "./FormBuilder/FormBuilder";

export default function FFMain() {
  const currentFormElement = useStore((state) => state.currentFormElement);

  return (
    <div className="flex flex-1">
      <div className="bg-zinc-200 w-[350px]">
        {currentFormElement ? <EditFormElement /> : <div>Nothing to edit</div>}
      </div>
      <div className="main flex-1">
        <div className="pt-5 mx-auto w-[500px]">
          <FormBuilder />
        </div>
      </div>
      <div className="bg-zinc-200 w-[350px]">final form display</div>
    </div>
  );
}
