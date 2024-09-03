import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

const Navbar = () => {
  const navRefs = useRef([
    React.createRef(), // For the h1 element
    React.createRef(), // For the first li element
    React.createRef(), // For the second li element
    React.createRef(), // For the third li element
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Loop through each ref and apply the animation
      navRefs.current.forEach((navRef) => {
        if (navRef.current) {
          if (scrollPosition > 80) {
            gsap.to(navRef.current, {
              duration: 0.3,
              // Increase the height
              color: "#f3f5f9", // Change the color
              ease: "power2.out",
            });
          } else {
            gsap.to(navRef.current, {
              duration: 0.3,

              color: "#000000",
              ease: "power2.out",
            });
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-full w-full flex justify-between items-center">
      <div className="logoContainer h-full flex justify-start items-center">
        <Link href={"/"} className="flex justify-start items-center gap-3">
          <Image src={"/mainLogo.svg"} height={60} width={60} alt="mainLogo" />
          <h1
            ref={navRefs.current[0]}
            className="monsterratFont font-semibold self-center xxs:hidden md:flex md:text-2xl lg:text-4xl text-customBlack monsterratFont"
          >
            Housing Market
          </h1>
        </Link>
      </div>
      <nav className="navigationButtons monsterratFont text-slate-100 h-full xxs:w-4/5 md:w-3/5 flex items-center justify-end xxs:gap-1 md:gap-5 xxs:text-xs sm:text-sm md:text-balance">
        <Link href={"/contact_us"}>
          <li
            ref={navRefs.current[1]}
            className="h-[60%] text-black  text-semibold xxs:text-xs sm:text-sm md:text-md lg:text-xl flex justify-center items-center md:px-2 hover:text-customOrange transition duration-75 ease-linear"
          >
            Contact Us
          </li>
        </Link>
        <Link href={"/cart"}>
          <li
            ref={navRefs.current[2]}
            className="h-[60%] flex text-black text-semibold xxs:text-xs sm:text-sm md:text-md lg:text-xl  justify-center items-center px-2 hover:text-customOrange transition duration-75 ease-linear"
          >
            Cart
          </li>
        </Link>
        <Link href={"/login"}>
          <li
            ref={navRefs.current[3]}
            className="h-[60%] flex text-black text-semibold xxs:text-xs sm:text-sm md:text-md lg:text-xl  justify-center items-center px-2 hover:text-customOrange transition duration-75 ease-linear"
          >
            Login
          </li>
        </Link>
        <Link href={"/signup"} className="">
          <li className="h-[70%] hover:bg-gray-300 text-semibold xxs:text-xs sm:text-sm md:text-md lg:text-xl bg-orange-600 flex justify-center rounded-full items-center px-4 py-2 transition duration-75 ease-linear hover:text-gray-700 text-gray-200 hover:shadow-md shadow-gray-400">
            Signup
          </li>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
