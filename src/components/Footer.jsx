import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="border border-black w-full h-[500px] flex justify-center bg-customBlack ">
        <div className="h-full w-full container flex justify-between items-center ">
          <div className="h-[60%] xxs:w-[15%] md:w-[30%] flex flex-col items-start justify-start ">
            <h1 className="monsterratFont mb-4 xxs:text-sm md:text-md xl:text-xl text-slate-100 ">
              Pages
            </h1>
            <div className="xxs:h-[2px] md:h-[5px] xxs:w-[30px] md:w-[70px] bg-customOrange rounded-r-md"></div>
            <Link href={"/cart"}>
              <h3 className="mb-4 mt-4  xxs:text-[8px] md:text-sm xl:text-lg text-slate-100 hover:text-customOrange transition duration-75 ease-linear">
                Cart
              </h3>
            </Link>
            <Link href={"/contact_us"}>
              <h3 className="mb-4  xxs:text-[8px] md:text-sm xl:text-lg text-slate-100 hover:text-customOrange transition duration-75 ease-linear">
                Contact Us
              </h3>
            </Link>
            <Link href={"/listing"}>
              <h3 className="mb-4 xxs:text-[8px] md:text-sm xl:text-lg text-slate-100 hover:text-customOrange transition duration-75 ease-linear">
                Listing
              </h3>
            </Link>
            <Link href={"/login"}>
              <h3 className="mb-4 xxs:text-[8px] md:text-sm xl:text-lg text-slate-100 hover:text-customOrange transition duration-75 ease-linear">
                Login
              </h3>
            </Link>
            <Link href={"/signup"}>
              <h3 className="mb-4 xxs:text-[8px] md:text-sm xl:text-lg text-slate-100 hover:text-customOrange transition duration-75 ease-linear">
                Signup
              </h3>
            </Link>
          </div>
          <div className="h-[60%] xxs:w-[45%] md:w-[30%] flex flex-col items-start justify-start ">
            <h1 className="monsterratFont mb-4 xxs:text-sm md:text-md xl:text-xl text-slate-100 ">
              Get in Touch
            </h1>
            <div className="xxs:h-[2px] md:h-[5px] xxs:w-[30px] md:w-[70px] bg-customOrange rounded-r-md"></div>
            <h3 className="mb-4 mt-4  text-slate-100 xxs:text-[8px] md:text-sm xl:text-lg">
              New Delhi, Delhi
            </h3>
            <Link href={"mailto:vishalkirtaniyaofficial@gmail.com"}>
              <h3 className="mb-4  text-slate-100 xxs:text-[8px] md:text-sm xl:text-lg">
                vishalkirtaniyaofficial@gmail.com
              </h3>
            </Link>
            <h3 className="mb-4 b text-slate-100 xxs:text-[8px] md:text-sm xl:text-lg">
              +91 8839054275
            </h3>
          </div>
          <div className="h-[60%] w-[30%] flex flex-col items-start justify-start ">
            <h1 className="monsterratFont mb-4 xxs:text-sm md:text-md xl:text-xl text-slate-100 ">
              About Us
            </h1>
            <div className="xxs:h-[2px] md:h-[5px] xxs:w-[30px] md:w-[70px] bg-customOrange rounded-r-md"></div>
            <p className="mt-4 w-[85%] leading-loose xxs:text-[8px] md:text-sm xl:text-lg text-slate-100 ">
              Explore Housing Market, the ultimate platform for renting houses.
              Find your perfect home with ease, from cozy apartments to spacious
              family homes, all tailored to your preferences and budget. Rent
              smarter today!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
