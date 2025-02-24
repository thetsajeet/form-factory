import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { X, CopyIcon } from "lucide-react";

interface PublishSuccessProps {
  handleClose: () => void;
  handleSuccess: () => void;
  id: string;
}

const handleCopy = async (url: string) => {
  try {
    await window.navigator.clipboard.writeText(url);
  } catch (error) {
    console.log(error);
  }
};

export default function PublishSuccess({
  handleClose,
  handleSuccess,
  id,
}: PublishSuccessProps) {
  return (
    <div className="contents">
      <DialogHeader>
        <div className="w-full flex">
          <DialogTitle className="flex-1">Published Successfully!</DialogTitle>
          <X onClick={handleClose} className="h-4 w-4 cursor-pointer" />
        </div>
        <DialogDescription>
          Your form is now publicly available to take responses.
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-2">
          <Input
            value={`${process.env.NEXT_PUBLIC_PROJECT_DOMAIN}/view_form/${id}`}
            readOnly
            className="rounded-sm"
          />
          <Button
            onClick={() =>
              handleCopy(
                `${process.env.NEXT_PUBLIC_PROJECT_DOMAIN}/view_form/${id}`
              )
            }
            type="button"
            className=""
            variant="outline"
          >
            <CopyIcon className="w-4 h-4" />
          </Button>
        </div>
        <Button onClick={handleSuccess}>View Form</Button>
      </div>
    </div>
  );
}
