import HeroSection from "@/components/landing-page/HeroSection";
import Navbar from "@/components/landing-page/Navbar";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col bg-[#0A0A0A]">
      {/* navbar */}
      <Navbar />
      {/* hero */}
      <HeroSection />
      {/* bento grid */}
      <div>bg</div>
      {/* testimonials */}
      <div>t</div>
      {/* footer */}
      <div>f</div>
    </div>
  );
}
