"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
/*import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);*/

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (ev) => {
    if (!isHovering) return;
    const rect = ev.currentTarget.getBoundingClientRect();
    const x = ((ev.clientX - rect.left) / rect.width) * 100;
    const y = ((ev.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-[calc(30dvh-3rem)]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="pattern-bg default-fade"
        style={{
          opacity: isHovering ? 0 : 0.3,
          transition: "opacity 0.5s ease-in-out",
        }}
      ></div>
      <div
        className="pattern-bg"
        style={{
          WebkitMask: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%,  rgb(15 23 42) 0%, transparent 35%)`,
          mask: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%,  rgb(15 23 42) 0%, transparent 35%)`,
          opacity: isHovering ? 0.3 : 0,
        }}
      ></div>
      <div className="opacity-10">
        <div className="absolute top-0 right-0 sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] bg-primary-700/50 rounded-full blur-3xl"></div>
        <div className="absolute top-4 right-4 sm:w-[400px] sm:h-[400px] w-[150px] h-[150px] bg-primary-500/60 rounded-full blur-2xl"></div>
        <div className="absolute top-8 right-8 sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-primary-400/70 rounded-full blur-xl"></div>
      </div>
      <h1 className="text-3xl font-bold tracking-light text-cloud sm:text-5xl">
        <b className="text-black">Don Cho</b> is a Product Designer at Studio
        Lupa, <span className="block">currently based in New York.</span>
      </h1>
      <div>
        <a
          href="/#work"
          className="absolute bottom-4 left-4 translate-y-72 pl-1 md:pl-2 pr-1 md:pr-2 py-2 md:py-3 hover:opacity-70 transition-colors"
        >
          <ChevronDown className="w-6 h-6 hover:opacity-70" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
