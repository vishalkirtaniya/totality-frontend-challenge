import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { gsap } from "gsap";

const PropertyCard = ({ id, image, title, description, price, onBookNow }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const router = useRouter();
  const popupRef = useRef(null); // Fixed ref creation

  const handleBookNow = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopupClose = () => {
    setIsPopupVisible(false);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    router.push("/cart");
  };

  useEffect(() => {
    if (isPopupVisible && popupRef.current) {
      gsap.fromTo(
        popupRef.current,
        { scale: 0 },
        { scale: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [isPopupVisible]);

  return (
    <div
      className="relative rounded-xl shadow-md shadow-gray-300 xxs:p-1 sm:p-2 md:p-3 lg:p-4"
      key={id}
    >
      <Image
        src={image}
        height={100}
        width={150}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded-xl"
      />
      <h2 className="xxs:text-md sm:text-lg md:text-xl font-semibold mb-2 text-slate-800">
        {title}
      </h2>
      <p className="text-slate-800 mb-4 xxs:text-xs sm:text-sm md:text-lg">
        {description}
      </p>
      <div className="xxs:text-xs sm:text-sm md:text-md lg:text-lg text-slate-900 font-semibold xxs:mb-1 sm:mb-2 md:mb-3 lg:mb-4">
        ${price}/night
      </div>
      <button
        onClick={() => {
          handleBookNow();
          onBookNow();
        }}
        className="xxs:text-xs sm:text-sm md:text-md lg:text-lg px-4 py-2 rounded-full shadow-md shadow-gray-400 hover:text-white text-gray-700 hover:bg-orange-600 transition duration-75 font-semibold"
      >
        Book Now
      </button>

      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <div
            ref={popupRef}
            className="bg-gray-100 p-6 rounded-xl shadow-lg text-center z-40"
          >
            <h3 className="xxs:text-xs sm:text-sm md:text-lg lg:text-xl font-semibold mb-4">
              Thank You!
            </h3>
            <p className="xxs:text-xs md:text-md lg:text-lg mb-4">
              Your booking has been added to your cart.
            </p>
            <button
              onClick={handleClosePopupClose}
              className="px-4 py-2 rounded-xl shadow-md bg-gray-200 shadow-gray-400 text-gray-700 hover:text-white hover:bg-orange-500 font-semibold mr-2 xxs:text-xs sm:text-sm md:text-lg  transition duration-75"
            >
              Close
            </button>
            <button
              onClick={handleClosePopup}
              className="px-4 py-2 rounded-xl shadow-md bg-gray-200 shadow-gray-400 text-gray-700 hover:text-white hover:bg-orange-500 font-semibold xxs:text-xs sm:text-sm md:text-lg transition duration-75"
            >
              Go to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyCard;
