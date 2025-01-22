"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import useStore from "@/lib/store";
import { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { useRouter } from "next/navigation";
import PublishConfirm from "./FormModals/PublishConfirm";
import PublishSuccess from "./FormModals/PublishSuccess";

export default function FFHeader() {
  const { formTitle } = useStore();
  const router = useRouter();
  const [modalParams, setModalParams] = useState<{
    isOpen: boolean;
    type?: string;
  }>({
    isOpen: false,
  });

  return (
    <div className="w-full py-2 px-5 text-sm flex text-zinc-200 bg-zinc-800 items-center justify-between">
      <span>
        <span className="font-semibold">My Form</span> /{" "}
        <span className="font-bold text-md">{formTitle}</span>
      </span>
      <Button
        size="sm"
        variant="outline"
        className="text-zinc-700"
        onClick={() => setModalParams({ isOpen: true, type: "publishConfirm" })}
      >
        Publish <ArrowRight />
      </Button>
      <Dialog open={modalParams.isOpen}>
        <DialogContent>
          {modalParams.isOpen && modalParams.type === "publishConfirm" && (
            <PublishConfirm
              handleCancel={() => setModalParams({ isOpen: false })}
              handleSuccess={() =>
                setModalParams({ isOpen: true, type: "publishRedirect" })
              }
            />
          )}
          {modalParams.isOpen && modalParams.type === "publishRedirect" && (
            <PublishSuccess
              handleClose={() => setModalParams({ isOpen: false })}
              handleSuccess={() => router.push("/view_form/1")} // get form id from backend
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
