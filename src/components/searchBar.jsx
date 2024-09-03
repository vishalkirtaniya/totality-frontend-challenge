"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const SearchBar = ({
  labelText = "",
  width = "100%",
  height = "60px",
  locations = [],
  onLocationSelect,
}) => {
  const [label, setLabel] = useState(labelText);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleClickOutside = (event) => {
      if (container && !container.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setShowSuggestions((prev) => !prev);
    if (!showSuggestions) {
      gsap.to(labelRef.current, {
        y: -15,
        scale: 0.9,
        duration: 0.2,
        ease: "power1.in",
      });
    }
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    onLocationSelect?.(location);
    setShowSuggestions(false);
    gsap.to(labelRef.current, {
      y: 0,
      x: 0,
      scale: 1,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full"
      style={{ width, height }}
    >
      <div
        onClick={handleClick}
        className="flex items-center h-full cursor-pointer border-b-2 border-gray-300 ml-3 z-10"
      >
        <label
          ref={labelRef}
          className={`absolute pointer-events-none ml-3 transition-transform ${
            selectedLocation ? "transform -translate-y-4 scale-90" : ""
          }`}
        >
          {label}
        </label>
        <div className="ml-3 z-10">
          {selectedLocation || (label && showSuggestions ? "" : label)}
        </div>
      </div>

      {showSuggestions && (
        <div className="absolute top-full left-0 w-full bg-gray-200 hover:bg-gray-300 transition duration-75 z-20 max-h-60 overflow-y-auto">
          {locations.length > 0 ? (
            locations.map((location, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleLocationSelect(location)}
              >
                {location}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
