"use client";

import { ArrowRight, Home } from "lucide-react";
import { Button } from "../ui/button";
import useStore from "@/lib/store";
import { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { useRouter } from "next/navigation";
import PublishConfirm from "./FormModals/PublishConfirm";
import PublishSuccess from "./FormModals/PublishSuccess";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import Link from "next/link";

export default function FFHeader() {
  const { formTitle } = useStore();
  const { width, height } = useWindowSize();
  const router = useRouter();
  const [modalParams, setModalParams] = useState<{
    isOpen: boolean;
    type?: string;
  }>({
    isOpen: false,
  });

  const [confetti, toggleConfetti] = useState<boolean>(false);

  return (
    <>
      {/* todo: try to hydrate  */}
      {confetti && (
        <Confetti
          run={confetti}
          width={width}
          height={height}
          tweenDuration={300}
          style={{ zIndex: 51 }} // more than the dialog
        />
      )}
      <div className="w-full py-2 px-5 text-sm flex text-zinc-200 bg-zinc-800 items-center">
        <span className="flex flex-1">
          <Link href="/" className="hover:text-gray-300 mr-3">
            <Home className="size-5" />
          </Link>
          <span>
            <span className="font-semibold mr-1">My Form</span> /
            <span className="ml-1 font-bold text-md">{formTitle}</span>
          </span>
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
        <Dialog open={modalParams.isOpen}>
          <DialogContent className="z-[52]">
            {modalParams.isOpen && modalParams.type === "publishConfirm" && (
              <PublishConfirm
                handleCancel={() => setModalParams({ isOpen: false })}
                handleSuccess={() => {
                  setModalParams({ isOpen: true, type: "publishRedirect" });
                  toggleConfetti(true);
                }}
              />
            )}
            {modalParams.isOpen && modalParams.type === "publishRedirect" && (
              <>
                <PublishSuccess
                  handleClose={() => {
                    toggleConfetti(false);
                    setModalParams({ isOpen: false });
                  }}
                  handleSuccess={() => {
                    toggleConfetti(false);
                    router.push("/view_form/1");
                  }} // get form id from backend
                />
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
