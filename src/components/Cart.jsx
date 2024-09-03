import React, { useState } from "react";
import { useBooking } from "@/context/BookingContext";
import Checkout from "./Checkout";

const Cart = () => {
  const { bookedProperties, setBookedProperties } = useBooking();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const totalCost = bookedProperties.reduce(
    (acc, property) => acc + property.price * property.quantity,
    0
  );

  const handleIncrease = (id) => {
    setBookedProperties((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );
  };

  const handleDecrease = (id) => {
    setBookedProperties((prev) =>
      prev.map((p) =>
        p.id === id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
      )
    );
  };

  const handleRemove = (id) => {
    setBookedProperties((prev) => prev.filter((p) => p.id !== id));
  };

  const handleCompleteCheckout = (details) => {
    console.log("Booking Details:", details);
    console.log("Booked Properties:", bookedProperties);
    setBookedProperties([]);
    setIsPopupVisible(false);
  };

  return (
    <div className="cart min-h-[100vh] w-full monsterratFont">
      <h2 className="text-center font-bold mb-6 monsterratFont text-gray-700 text-xs sm:text-md md:text-xl lg:text-2xl">
        Booking Cart
      </h2>
      {bookedProperties.length === 0 ? (
        <p className="monsterratFont text-center text-gray-700 text-xs sm:text-sm md:text-md lg:text-lg">
          Your cart is empty.
        </p>
      ) : (
        <div>
          {bookedProperties.map((property) => (
            <React.Fragment key={property.id}>
              <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-6 w-full h-full">
                <div className="flex flex-col justify-start items-start w-full md:w-2/3">
                  <h3 className="text-center font-semibold mb-4 monsterratFont text-gray-700 text-xs sm:text-md md:text-lg lg:text-xl">
                    {property.description[0]}
                  </h3>
                  <div className="rounded-2xl overflow-hidden mb-3 md:mb-5 lg:mb-8 border border-gray-200 xxs:w-full md:w-[600px]">
                    <div className="flex flex-col md:flex-row w-full h-auto md:h-[600px] ">
                      <div className="w-full h-full  ">
                        <img
                          src={property.image[0]}
                          className="h-full w-full object-cover"
                          alt="image Title"
                        />
                      </div>
                      <div className="w-full h-full flex flex-col">
                        <div className="h-1/2 w-full">
                          <img
                            src={property.image[1]}
                            className="h-full w-full object-cover border border-gray-200"
                            alt="image Title"
                          />
                        </div>
                        <div className="h-1/2 w-full">
                          <img
                            src={property.image[2]}
                            className="h-full w-full object-cover border border-gray-200"
                            alt="image Title"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-center font-semibold mb-6 monsterratFont text-gray-700 text-xs sm:text-md md:text-xl lg:text-lg">
                    {property.title}
                  </h2>
                  <p className="font-normal mb-6 monsterratFont text-gray-600 text-xs md:text-sm lg:text-md">
                    {property.description[1]}
                  </p>
                </div>

                <div className="rounded-xl shadow-md shadow-gray-200 flex flex-col mb-4 p-4 bg-gray-50 h-full md:w-[336px]">
                  <h3 className="text-slate-900 font-semibold mb-4 text-xs sm:text-sm md:text-md lg:text-lg">
                    ${property.price}/night
                  </h3>
                  <div className="w-full flex justify-between mb-4">
                    <div className="w-1/2">
                      <span className="text-slate-900 font-semibold mb-4 text-xs sm:text-sm md:text-md lg:text-lg">
                        ${property.price}
                      </span>{" "}
                      *
                      <span className="text-slate-900 font-semibold mb-4 text-xs sm:text-sm md:text-md lg:text-lg">
                        {property.quantity}
                      </span>
                    </div>
                    <div className="flex w-1/2 gap-6 justify-end">
                      <button
                        onClick={() => handleDecrease(property.id)}
                        className="h-[40px] w-[40px] border-gray-500 text-White hover:bg-gray-300 shadow-gray-300 shadow-sm transition duration-75 rounded-full font-bold"
                      >
                        -
                      </button>
                      <button
                        onClick={() => handleIncrease(property.id)}
                        className="h-[40px] w-[40px] border-gray-500 text-White hover:bg-gray-300 shadow-gray-300 shadow-sm transition duration-75 rounded-full font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] w-full bg-gray-300 mb-4"></div>
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold monsterratFont text-gray-700">
                      Total before taxes
                    </h3>
                    <h3 className="text-xl font-bold monsterratFont text-slate-800">
                      {" "}
                      ${totalCost}
                    </h3>
                  </div>
                  <div className="w-full flex justify-between mt-4">
                    <button
                      onClick={() => handleRemove(property.id)}
                      className="h-[60px] w-[45%] hover:bg-orange-500 bg-gray-400 text-white hover:text-slate-700 transition duration-75 rounded-xl"
                    >
                      Remove
                    </button>
                    {bookedProperties.length > 0 && (
                      <button
                        onClick={() => setIsPopupVisible(true)}
                        className="h-[60px] w-[45%] hover:bg-orange-500 bg-gray-400 text-white hover:text-slate-700 transition duration-75 rounded-xl"
                      >
                        Checkout
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Popup for Checkout */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="h-full w-full md:h-[840px] md:w-[600px] bg-white rounded-lg p-8 relative">
            <button
              className="absolute ml-2 top-2 left-2 text-gray-600 text-xl hover:text-orange-500 transition duration-75"
              onClick={() => setIsPopupVisible(false)}
            >
              X
            </button>
            <h1 className="text-center monsterratFont font-semibold text-slate-800 text-xs sm:text-md lg:text-lg">
              Checkout
            </h1>
            <div className="h-[2px] w-[95%] bg-gray-400 my-4"></div>
            <Checkout
              bookedProperties={bookedProperties}
              totalCost={totalCost}
              onCompleteCheckout={handleCompleteCheckout} // Pass the correct prop
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
