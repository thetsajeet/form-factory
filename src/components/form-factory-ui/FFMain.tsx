"use client";

import useStore from "@/lib/store";
import FormBuilder from "./FormBuilder/FormBuilder";

const EditFormElement = () => {
  const { currentFormElement } = useStore();

  return currentFormElement ? (
    <div>editing somethign</div>
  ) : (
    <div>nothing to edit</div>
  );
};

export default function FFMain() {
  return (
    <div className="flex flex-1">
      <div className="bg-zinc-200 w-[350px]">
        <EditFormElement />
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
