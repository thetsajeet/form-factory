"use client";

import { ArrowRight, CopyIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import useStore from "@/lib/store";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";

export default function FFHeader() {
  const { formTitle } = useStore();
  // const [modalOpen, setModalOpen] = useState<boolean>(false);
  const router = useRouter();
  const [modalParams, setModalParams] = useState<{
    isOpen: boolean;
    type?: string;
  }>({
    isOpen: false,
  });

  const handleCopy = async (url: string) => {
    try {
      await window.navigator.clipboard.writeText(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full py-2 px-5 text-sm flex text-zinc-200 bg-zinc-800 items-center justify-between">
      <Dialog open={modalParams.isOpen}>
        <span>
          <span className="font-semibold">My Form</span> /{" "}
          <span className="font-bold text-md">{formTitle}</span>
        </span>
        <Button
          size="sm"
          variant="outline"
          className="text-zinc-700"
          onClick={() =>
            setModalParams({ isOpen: true, type: "publishConfirm" })
          }
        >
          Publish <ArrowRight />
        </Button>
        <DialogContent>
          {modalParams.isOpen && modalParams.type === "publishConfirm" && (
            <div className="contents">
              <DialogHeader>
                <div className="w-full flex">
                  <span className="flex-1">
                    <DialogTitle>Are you sure you want to publish?</DialogTitle>
                  </span>
                  <span className="justify-self-end">
                    <X
                      onClick={() => setModalParams({ isOpen: false })}
                      className="h-4 w-4 cursor-pointer"
                    />
                  </span>
                </div>
              </DialogHeader>
              <div className="flex justify-between space-x-2">
                <Button
                  onClick={() =>
                    setModalParams({ type: "publishRedirect", isOpen: true })
                  }
                  type="button"
                  className="w-full"
                  variant="default"
                >
                  Yes
                </Button>
                <Button
                  onClick={() => setModalParams({ isOpen: false })}
                  type="button"
                  className="w-full"
                  variant="outline"
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
          {modalParams.isOpen && modalParams.type === "publishRedirect" && (
            <div className="contents">
              <DialogHeader>
                <div className="w-full flex">
                  <span className="flex-1">
                    <DialogTitle>Published Successfully!</DialogTitle>
                  </span>
                  <span className="justify-self-end">
                    <X
                      onClick={() => setModalParams({ isOpen: false })}
                      className="h-4 w-4 cursor-pointer"
                    />
                  </span>
                </div>
              </DialogHeader>
              <div className="flex flex-col space-y-2">
                <div className="flex space-x-2">
                  <Input
                    value="http://localhost:3000/view_form/1"
                    readOnly
                    className="rounded-sm"
                  />
                  <Button
                    onClick={() =>
                      handleCopy("http://localhost:3000/view_form/1")
                    }
                    type="button"
                    className=""
                    variant="outline"
                  >
                    <CopyIcon className="w-4 h-4" />
                  </Button>
                </div>
                <Button onClick={() => router.push("/view_form/1")}>
                  View Form
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
