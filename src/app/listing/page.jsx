"use client";

import React, { useState } from "react";
import Filter from "@/components/Filter";
import PropertyCard from "@/components/PropertyCard";
import propertiesData from "@/data/properties.json";

const Listing = ({ onBookNow, onFilterChange }) => {
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);

  const handleFilterChange = (newFilteredProperties) => {
    setFilteredProperties(newFilteredProperties);
    onFilterChange(newFilteredProperties);
  };

  return (
    <>
      <Filter properties={propertiesData} onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            image={property.image[0]}
            title={property.title}
            description={
              Array.isArray(property.description)
                ? property.description[0]
                : property.description
            }
            price={property.price}
            onBookNow={() => onBookNow(property)}
          />
        ))}
      </div>
    </>
  );
};

export default Listing;
