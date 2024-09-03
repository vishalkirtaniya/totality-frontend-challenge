"use client";

import Navbar from "@/components/Navbar";
import { BookingProvider } from "@/context/BookingContext";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Footer from "@/components/Footer";
const ListingLayout = ({ children }) => {
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
    <BookingProvider>
      <div className="">
        <div
          ref={navbarRef}
          className="xxs:h-[50px] sm:h-[60px] md:h-20 w-full  fixed z-50"
        >
          <div className="h-full w-[95%] container mx-auto">
            <Navbar />
          </div>
        </div>
        <div className="mx-auto w-[95%] container mb-4 pt-20">{children}</div>
      </div>
      <Footer />
    </BookingProvider>
  );
};

export default ListingLayout;
