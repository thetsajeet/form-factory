"use client";

import useStore from "@/lib/store";

export default function EditFormElement() {
  const { currentFormElement } = useStore();

  return currentFormElement ? (
    <div>
      editing something: {currentFormElement.id} - {currentFormElement.name}
    </div>
  ) : (
    <div>nothing to edit</div>
  );
}
