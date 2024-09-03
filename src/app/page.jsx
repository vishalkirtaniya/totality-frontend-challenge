"use client";

import React, { useState, useEffect, useRef } from "react";
import propertiesData from "@/data/properties.json";
import Navbar from "@/components/Navbar";
import Listing from "@/app/listing/page";
import { useBooking } from "@/context/BookingContext";
import Footer from "@/components/Footer";
import gsap from "gsap";

const Home = () => {
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

  const { bookedProperties, setBookedProperties } = useBooking();
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);
  const [showCheckout, setShowCheckout] = useState(false);

  const totalCost = bookedProperties.reduce(
    (acc, property) => acc + property.price * property.quantity,
    0
  );

  const handleFilterChange = (filteredProperties) => {
    setFilteredProperties(filteredProperties);
  };

  const handleBookNow = (property) => {
    setBookedProperties((prev) => {
      const existingProperty = prev.find((p) => p.id === property.id);
      if (existingProperty) {
        return prev.map((p) =>
          p.id === property.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [
        ...prev,
        { ...property, quantity: 1, bookingDates: [new Date(), new Date()] },
      ];
    });
  };

  const handleCompleteCheckout = (details) => {
    console.log("Booking Details:", details);
    console.log("Booked Properties:", bookedProperties);
    // You can integrate this with a backend or payment service
    setBookedProperties([]); // Clear the cart after successful checkout
    setShowCheckout(false); // Hide checkout after completion
  };

  return (
    <div className="">
      <div
        ref={navbarRef}
        className="xxs:h-[50px] sm:h-[60px] md:h-20 w-full fixed z-50"
      >
        <div className="container mx-auto h-full w-[95%] ">
          <Navbar />
        </div>
      </div>
      <div className="w-[95%] container mx-auto pt-20 mb-5">
        <Listing
          onBookNow={handleBookNow}
          onFilterChange={handleFilterChange}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
