import FFFooter from "@/components/form-factory-ui/FFFooter";
import HeroSection from "@/components/landing-page/HeroSection";
import Navbar from "@/components/landing-page/Navbar";
import Testimonials from "@/components/landing-page/Testimonials";
import { LineShadowText } from "@/components/ui/line-shadow-text";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col bg-[#0A0A0A] text-white ">
      {/* navbar */}
      <Navbar />
      {/* hero */}
      <HeroSection />
      {/* bento grid */}
      <div className="flex-1">bg</div>
      {/* testimonials */}
      <div className="max-w-full overflow-x-hidden bg-black">
        <div className="text-2xl md:text-4xl italic font-semibold text-center mt-4 tracking-tight">
          Hear what they say!
        </div>
        <Testimonials />
      </div>
      {/* footer */}
      <FFFooter />
    </div>
  );
}
