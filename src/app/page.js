import Image from "next/image";
import WorkSection from "./components/WorkSection";

export default function Home() {
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="relative">
        <h1 className="text-3xl font-bold tracking-light text-cloud sm:text-5xl">
          <b className="text-black">Don Cho</b> is a Product Designer at Studio
          Lupa, <span className="block">currently based in New York.</span>
        </h1>
      </div>
      <WorkSection />
    </div>
  );
}
