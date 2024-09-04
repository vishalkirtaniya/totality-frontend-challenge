import React, { useState } from "react";

const Checkout = ({ bookedProperties, totalCost, onCompleteCheckout }) => {
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCompleteCheckout(bookingDetails);
  };

  return (
    <div className="checkout p-4 rounded">
      <h2 className="text-2xl font-bold mb-4 xxs:text-xs sm:text-sm md:text-lg">
        Checkout
      </h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold xxs:text-xs sm:text-sm md:text-lg">
          Booked Properties
        </h3>
        {bookedProperties.map((property) => (
          <div key={property.id} className="mb-2">
            <p>
              {property.title} - ${property.price} x {property.quantity}
            </p>
          </div>
        ))}
        <p className="xxs:text-xs sm:text-sm md:text-lg lg:text-xl font-bold mt-2">
          Total Cost: ${totalCost}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block xxs:text-xs sm:text-sm font-bold mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={bookingDetails.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 focus:outline-customOrange focus:outline-none focus:outline-1 rounded xxs:text-xs sm:text-sm md:text-md"
            required
          />
        </div>
        <div>
          <label className="block xxs:text-xs sm:text-sm font-bold mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={bookingDetails.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 focus:outline-customOrange focus:outline-none focus:outline-1 rounded xxs:text-xs sm:text-sm md:text-md"
            required
          />
        </div>
        <div>
          <label className="block xxs:text-xs sm:text-sm font-bold mb-1">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={bookingDetails.phone}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 focus:outline-customOrange focus:outline-none focus:outline-1 rounded xxs:text-xs sm:text-sm md:text-md"
            required
          />
        </div>
        <div>
          <label className="block xxs:text-xs sm:text-sm font-bold mb-1">
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            value={bookingDetails.cardNumber}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 focus:outline-customOrange focus:outline-none focus:outline-1 rounded xxs:text-xs sm:text-sm md:text-md"
            required
          />
        </div>
        <div>
          <label className="block xxs:text-xs sm:text-sm font-bold mb-1">
            Expiry Date
          </label>
          <input
            type="text"
            name="expiryDate"
            value={bookingDetails.expiryDate}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 focus:outline-customOrange focus:outline-none focus:outline-1 rounded xxs:text-xs sm:text-sm md:text-md"
            required
          />
        </div>
        <div>
          <label className="block xxs:text-xs sm:text-sm font-bold mb-1">
            CVV
          </label>
          <input
            type="text"
            name="cvv"
            value={bookingDetails.cvv}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 focus:outline-customOrange focus:outline-none focus:outline-1 rounded xxs:text-xs sm:text-sm md:text-md"
            required
          />
        </div>
        <button
          type="submit"
          className="xxs:w-3/4 md:w-[300px] py-2 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded xxs:text-xs sm:text-sm md:text-lg lg:text-xl"
        >
          Complete Booking
        </button>
      </form>
    </div>
  );
};

export default Checkout;
