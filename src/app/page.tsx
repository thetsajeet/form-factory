import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <span>Welcome to Form Factory</span>
      <Button size="sm">
        Get started <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
