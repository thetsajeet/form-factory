"use client";

import { ArrowRight, X } from "lucide-react";
import { Button } from "../ui/button";
import useStore from "@/lib/store";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

export default function FFHeader() {
  const { formTitle } = useStore();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handlePublish = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-full py-2 px-5 text-sm flex text-zinc-200 bg-zinc-800 items-center justify-between">
      <Dialog open={modalOpen}>
        <span>
          <span className="font-semibold">My Form</span> /{" "}
          <span className="font-bold text-md">{formTitle}</span>
        </span>
        <Button
          size="sm"
          variant="outline"
          className="text-zinc-700"
          onClick={() => setModalOpen(true)}
        >
          Publish <ArrowRight />
        </Button>
        <DialogContent>
          <DialogHeader>
            <div className="w-full flex">
              <span className="flex-1">
                <DialogTitle>Are you sure you want to submit?</DialogTitle>
              </span>
              <span className="justify-self-end">
                <X
                  onClick={() => setModalOpen(false)}
                  className="h-4 w-4 cursor-pointer"
                />
              </span>
            </div>
          </DialogHeader>
          <div className="flex justify-between space-x-2">
            <Button
              onClick={() => handlePublish()}
              type="button"
              className="w-full"
              variant="default"
            >
              Yes
            </Button>
            <Button
              onClick={() => setModalOpen(false)}
              type="button"
              className="w-full"
              variant="outline"
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
