import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Heart } from "lucide-react";

export default function FFFooter() {
  return (
    <div className="flex justify-center align-middle w-full bg-zinc-950 text-zinc-100 py-1">
      <div>
        Made with <Heart className="size-5 inline" fill="red" color="red" /> by
        Ajeet{" "}
        <a href="https://github.com/thetsajeet" target="_blank" rel="noopener">
          <GitHubLogoIcon className="size-5 inline" />
        </a>
      </div>
    </div>
  );
}
