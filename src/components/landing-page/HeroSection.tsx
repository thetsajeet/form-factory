import { SparklesCore } from "../ui/sparkles";

export default function HeroSection() {
  return (
    <div className="pt-12 pb-24 w-full flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden h-[400px] md:h-[500px] mb-4">
      <div className=" p-4 max-w-7xl  mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          FORM FACTORY
        </h1>
        <p className="mt-4 font-normal text-base text-gray-300 max-w-lg text-center mx-auto bg-black/50 rounded-md px-5 py-2 text-pretty">
          Customize, publish, and share your forms online in minutes—no coding
          required. Streamline your workflow and get started today!
        </p>
      </div>
      <div
        className="absolute h-full w-full top-0 mx-auto rotate-180"
        style={{
          clipPath: "polygon(23% 0, 78% 0, 100% 100%, 0% 100%)",
        }}
      >
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={500}
          className="w-full h-full"
          particleColor="#ccc"
        />
      </div>
    </div>
  );
}
