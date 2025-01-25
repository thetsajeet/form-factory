import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-4 bg-zinc-900 text-zinc-50 flex items-center">
      <div className="container xl:max-w-screen-xl mx-auto flex-1 flex items-center">
        <div className="flex-1 flex justify-between gap-2 items-center">
          <div className="text-lg md:text-2xl font-semibold px-2">
            <Link href="/" className="hover:text-gray-300">
              Form Factory
            </Link>
          </div>
          {/* <div className="hidden md:flex justify-between md:gap-x-1 px-2">
            <Button
              variant="link"
              className="text-zinc-50 hover:text-gray-300 text-lg"
            >
              <Link href="#about">About</Link>
            </Button>
            <Button
              variant="link"
              className="text-zinc-50 hover:text-gray-300 text-lg"
            >
              <Link href="#pricing">Pricing</Link>
            </Button>
            <Button
              variant="link"
              className="text-zinc-50 hover:text-gray-300 text-lg"
            >
              <Link href="#testimonial">Testimonials</Link>
            </Button>
          </div> */}
          <div className="px-2">
            <Link href="/form-editor">
              <Button
                size="sm"
                variant="secondary"
                className="group font-medium"
              >
                Get Started
                <ArrowRight className="size-3 group-hover:translate-x-1 transition-all duration-200" />
              </Button>
            </Link>
          </div>
          {/* <div className="md:hidden px-2">
            <Menu className="size-5" />
          </div> */}
        </div>
      </div>
    </nav>
  );
}
