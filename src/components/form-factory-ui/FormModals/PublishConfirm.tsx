import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface PublishConfirmModalProps {
  handleCancel: () => void;
  handleSuccess: () => void;
}

export default function PublishConfirm({
  handleCancel,
  handleSuccess,
}: PublishConfirmModalProps) {
  return (
    <div className="contents">
      <DialogHeader>
        <div className="w-full flex">
          <span className="flex-1">
            <DialogTitle>Are you sure you want to publish?</DialogTitle>
          </span>
          <span className="justify-self-end">
            <X onClick={handleCancel} className="h-4 w-4 cursor-pointer" />
          </span>
        </div>
        <DialogDescription>
          By clicking on submit, your existing form state will be updated. This
          action is not reversible. Are you sure?
        </DialogDescription>
      </DialogHeader>
      <div className="flex justify-between space-x-2">
        <Button
          onClick={handleSuccess}
          type="button"
          className="w-full"
          variant="default"
        >
          Yes
        </Button>
        <Button
          onClick={handleCancel}
          type="button"
          className="w-full"
          variant="outline"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
