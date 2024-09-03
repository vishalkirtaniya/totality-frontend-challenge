"use client";

import React, { useState, useEffect } from "react";
import propertiesData from "@/data/properties.json";
import SearchBar from "@/components/searchBar";
import Image from "next/image";

const Filter = ({ properties, onFilterChange }) => {
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [bedrooms, setBedrooms] = useState(1);
  const [amenities, setAmenities] = useState([]);
  const [locations, setLocations] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const locationsSet = new Set(
      propertiesData.map((property) => property.location)
    );
    const sortedLocations = Array.from(locationsSet).sort();
    setLocations(sortedLocations);
  }, []);

  const handleApplyChanges = () => {
    let filtered = properties;

    if (price) {
      filtered = filtered.sort((a, b) => {
        return price === "low" ? a.price - b.price : b.price - a.price;
      });
    }

    if (location) {
      filtered = filtered.filter((property) =>
        property.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (priceRange) {
      filtered = filtered.filter(
        (property) =>
          property.price >= priceRange[0] && property.price <= priceRange[1]
      );
    }

    if (bedrooms) {
      filtered = filtered.filter((property) => property.bedrooms >= bedrooms);
    }

    if (amenities.length > 0) {
      filtered = filtered.filter((property) =>
        amenities.every((amenity) => property.amenities.includes(amenity))
      );
    }

    onFilterChange(filtered);
    setIsPopupVisible(false); // Close the popup after applying changes
  };

  const handleLocationSelect = (selectedLocation) => {
    setLocation(selectedLocation);
    handleApplyChanges(); // Apply the changes automatically after selecting a location
  };

  const handleAmenityChange = (amenity) => {
    setAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <>
      <div className="mb-8 flex justify-center gap-8 monsterratFont">
        <div className="xxs:h-[30px] md:h-[60px] xxs:w-[250px] md:w-[430px] shadow-gray-300 shadow-md rounded-full flex justify-between items-center bg-gray-200">
          <div className=" xxs:ml-[3px] md:ml-[5px] xxs:h-[27px] md:h-[50px] xxs:w-[190px] md:w-[360px] hover:bg-gray-300 rounded-full transition duration-75">
            <SearchBar
              locations={locations}
              onLocationSelect={handleLocationSelect}
            />
          </div>
          <button
            className="searchApplier xxs:h-[27px] md:h-[50px] xxs:w-[27px] md:w-[50px] rounded-full bg-orange-600 hover:bg-orange-500 flex justify-center items-center xxs:mr-[3px] md:mr-[5px]"
            onClick={handleApplyChanges}
          >
            <img
              src={"/glass.svg"}
              className="xxs:h-[15px] xxs:w-[15px] md:h-[30px] md:w-[30px] "
              alt="apply search"
            />
          </button>
        </div>
        <button
          className="xxs:h-[28px] md:h-[55px] xxs:w-[70px] md:w-[100px] hover:bg-gray-300 bg-gray-200 shadow-gray-300 shadow-md rounded-full flex justify-center items-center"
          onClick={() => setIsPopupVisible(true)}
        >
          <Image src={"/filter.svg"} height={14} width={14} alt="filter svg" />
          <h2 className="monsterratFont xxs:text-xs sm:text-sm md:text-md lg:text-lg ml-1">
            Filter
          </h2>
        </button>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="h-[550px] w-[400px] bg-white rounded-lg p-8 relative">
            <button
              className="absolute ml-2 top-2 left-2 text-gray-600 text-xl hover:text-orange-500 transition duration-75"
              onClick={() => setIsPopupVisible(false)}
            >
              X
            </button>
            <h1 className="xxs:text-sm sm:text-md lg:text-lg text-center monsterratFont font-semibold text-slate-800">
              Filter
            </h1>
            <div className="h-[2px] w-[95%] bg-gray-400 my-4"></div>
            <div className="h-[85px] w-[95%] flex flex-col">
              <label className="xxs:text-sm sm:text-md lg:text-lg monsterratFont font-normal text-slate-700">
                Price Range
              </label>
              <select
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="block w-full mt-2 p-2 border rounded text-gray-700 xxs:text-xs md:text-sm"
              >
                <option value="">Any</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
              </select>
            </div>
            <div className="h-[2px] w-[95%] bg-gray-400 my-4"></div>
            <div className="h-[120px] w-full flex flex-col">
              <label className="xxs:text-sm sm:text-md lg:text-lg monsterratFont font-normal text-slate-700">
                Bedrooms
              </label>
              <div className="h-[80px] w-full flex justify-between items-center px-5">
                <h3 className="xxs:text-xs sm:text-sm lg:text-lg monsterratFont font-normal text-slate-600">
                  Beds
                </h3>
                <div className="h-full w-[160px] flex justify-between items-center">
                  <button
                    className="h-[50px] w-[50px] flex justify-center items-center border rounded-full border-slate-700 hover:bg-gray-400 text-lg font-semibold"
                    onClick={() => setBedrooms((prev) => Math.max(1, prev - 1))}
                  >
                    -
                  </button>
                  {bedrooms}
                  <button
                    className="h-[50px] w-[50px] flex justify-center items-center border rounded-full border-slate-700 hover:bg-gray-400 text-lg font-semibold"
                    onClick={() => setBedrooms((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[2px] w-[95%] bg-gray-400 my-4"></div>
            <div className="h-[120px] w-full flex flex-col">
              <label className="xxs:text-sm sm:text-md lg:text-lg monsterratFont font-normal text-slate-700">
                Amenities
              </label>
              <div className="flex flex-wrap gap-3">
                {["WiFi", "Pool", "Parking"].map((amenity) => (
                  <label key={amenity} className="block">
                    <input
                      type="checkbox"
                      checked={amenities.includes(amenity)}
                      onChange={() => handleAmenityChange(amenity)}
                    />
                    <span className="ml-2 xxs:text-xs md:text-sm">
                      {amenity}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mt-2 flex justify-center">
              <button
                onClick={handleApplyChanges}
                className="xxs:text-xs md:text-sm bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg"
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
