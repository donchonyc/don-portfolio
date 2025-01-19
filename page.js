import Image from "next/image";
import WorkSection from "./components/WorkSection";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      <WorkSection />
      <Footer />
    </div>
  );
}
