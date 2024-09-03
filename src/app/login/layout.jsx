"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gsap from "gsap";

const LoginLayout = ({ children }) => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 80) {
        gsap.to(navbarRef.current, {
          duration: 0.3,
          height: 90, // Increase the width
          backgroundColor: "#051922", // Change the color
          ease: "power2.out",
        });
      } else {
        gsap.to(navbarRef.current, {
          duration: 0.3,
          height: 80, // Reset the width
          backgroundColor: "#f3f4f6",
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="h-full w-full ">
      <div
        ref={navbarRef}
        className="xxs:h-[50px] sm:h-[60px] md:h-20 w-full fixed"
      >
        <div className="h-full w-full container mx-auto">
          <Navbar />
        </div>
      </div>
      <div className="h-[100vh] container mx-auto ">{children}</div>
      <Footer />
    </div>
  );
};

export default LoginLayout;
