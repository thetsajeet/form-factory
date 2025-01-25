import FFFooter from "@/components/form-factory-ui/FFFooter";
import HeroSection from "@/components/landing-page/HeroSection";
import Navbar from "@/components/landing-page/Navbar";
import Testimonials from "@/components/landing-page/Testimonials";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col bg-[#0A0A0A] text-white overflow-x-hidden">
      {/* navbar */}
      <Navbar />
      {/* hero */}
      <HeroSection />
      {/* bento grid */}
      <div className="flex-1">bg</div>
      {/* testimonials */}
      <div className="">
        <Testimonials />
      </div>
      {/* footer */}
      <FFFooter />
    </div>
  );
}
