"use client";

import FFFooter from "@/components/form-factory-ui/FFFooter";
import HeroSection from "@/components/landing-page/HeroSection";
import Navbar from "@/components/landing-page/Navbar";
import Testimonials from "@/components/landing-page/Testimonials";
import FeaturesSectionDemo from "@/components/landing-page/Features";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col bg-black text-white scroll-smooth">
      <Navbar />
      <HeroSection />
      <div className="flex justify-center mb-10">
        <Link href="/form-editor">
          <Button
            variant="secondary"
            className="h-[50px] w-[200px] group text-lg font-semibold"
          >
            Get Started
            <ArrowRight className="size-5 group-hover:translate-x-4 transition-all duration-300" />
          </Button>
        </Link>
      </div>
      <div id="about" className="flex-1">
        <div className="mx-auto relative">
          <div className="text-5xl text-center mb-4 italic">Features</div>
          <div className="relative w-full mx-auto">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
        </div>
        <FeaturesSectionDemo />
      </div>
      <div id="testimonial" className="max-w-full overflow-x-hidden bg-black">
        <div className="text-2xl md:text-4xl italic font-semibold text-center mt-4 tracking-tight py-4">
          Hear what they say!
          <div className="relative w-full mx-auto mt-4">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
        </div>
        <Testimonials />
      </div>
      <FFFooter />
    </div>
  );
}
