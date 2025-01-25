import { Spotlight } from "@/components/ui/spotlight";
import { SparklesCore } from "../ui/sparkles";

export default function HeroSection() {
  return (
    <div className="pt-40 pb-10 w-full flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          FORM FACTORY
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Customize, publish, and share your forms online in minutes—no coding
          required. Streamline your workflow and get started today!
        </p>
      </div>
      <div className="relative h-[200px] md:h-[100px] w-full mx-auto my-12">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
