import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function FFFooter() {
  return (
    <div className="flex justify-center align-middle w-full text-gray-300 py-3 bg-black text-lg">
      <div>
        Made with{" "}
        <Heart
          className="size-5 inline-flex animate-pulse duration-700 mx-1"
          fill="red"
          color="red"
        />{" "}
        by T S Ajeet{" "}
        <Link
          className="inline-flex align-middle mb-1"
          href="https://github.com/thetsajeet"
          target="_blank"
          rel="noopener"
        >
          <GitHubLogoIcon className="size-5 inline-flex ml-1" />
        </Link>
      </div>
    </div>
  );
}
