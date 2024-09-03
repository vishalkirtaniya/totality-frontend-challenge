"use client";

import React, { createContext, useContext, useState } from "react";

// Define the Property type
const Property = {
  id: Number,
  image: Array,
  title: String,
  description: [String, Array],
  price: Number,
  location: String,
  bedrooms: Number,
  amenities: Array,
};

// Define the BookedProperty type
const BookedProperty = {
  ...Property,
  quantity: Number,
  bookingDates: [Date, Date],
};

// Define the BookingContextType
const BookingContext = createContext(undefined);

export const BookingProvider = ({ children }) => {
  const [bookedProperties, setBookedProperties] = useState([]);

  const addPropertyToCart = (property) => {
    setBookedProperties((prev) => [
      ...prev,
      { ...property, quantity: 1, bookingDates: [new Date(), new Date()] },
    ]);
  };

  return (
    <BookingContext.Provider
      value={{ bookedProperties, addPropertyToCart, setBookedProperties }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
