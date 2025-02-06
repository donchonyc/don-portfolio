"use client";
import Link from "next/link";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navbar = () => {
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div ref={navContainerRef}>
      <nav className="fixed mx-auto top-0 left-0 right-0 z-10">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto py-2 p-8 md:p-12 lg:p-20">
          <Link
            href={"https://www.linkedin.com/in/donchony/"}
            className="text-1xl md:text-2xl text-cloud font-normal hover:text-cloud/70"
          >
            LinkedIn
          </Link>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              <li key="works">
                <Link href="#works" className="hover:text-cloud/70">
                  Work
                </Link>
              </li>
              <li className="hover:text-cloud/70 hover:opacity-70">
                <Link href="/resume.pdf">
                  Resume{" "}
                  <img
                    src="/diagonal-arrow.svg"
                    alt="Diagonal Arrow"
                    className="w-6 h-6 inline"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
