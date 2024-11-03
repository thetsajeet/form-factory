import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full py-2 flex bg-zinc-300 align-center">
        {/* form header */}
        My Form
      </div>
      <div className="flex-1 flex">
        {/* form workspace */}
        <div className="bg-zinc-400 w-[200px]">{/* sidebar */}sidebar</div>
        <div className="main flex-1">{/* sidebar */}main</div>
        <div className="bg-zinc-400 w-[200px]">{/* sidebar */}sidebar</div>
      </div>
      {/* form footer */}
      <div className="flex justify-center w-full bg-zinc-950 text-zinc-100 py-1">
        <div>
          Made with <Heart className="w-5 h-5 inline" fill="red" color="red" />{" "}
          by Ajeet{" "}
          <a href="https://github.com/Ts-A" target="_blank" rel="noopener">
            <GitHubLogoIcon className="w-5 h-5 inline" />
          </a>
        </div>
      </div>
    </div>
  );
}
