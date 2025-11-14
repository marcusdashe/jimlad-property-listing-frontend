"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { getProperties, type Property } from '@/lib/properties';
import { PropertyCard } from '@/components/property-card';
import { SearchBar } from '@/components/search-bar';

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    // In a real app, you'd fetch this from an API
    setProperties(getProperties());
  }, []);

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      const searchLower = searchTerm.toLowerCase();
      const matchesLocation = property.location.toLowerCase().includes(searchLower) || property.title.toLowerCase().includes(searchLower);

      const min = minPrice ? parseFloat(minPrice) : 0;
      const max = maxPrice ? parseFloat(maxPrice) : Infinity;

      const matchesPrice = property.price >= min && property.price <= max;

      return matchesLocation && matchesPrice;
    });
  }, [properties, searchTerm, minPrice, maxPrice]);

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <SearchBar
        location={searchTerm}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onLocationChange={setSearchTerm}
        onMinPriceChange={setMinPrice}
        onMaxPriceChange={setMaxPrice}
      />

      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-primary">No Properties Found</h2>
          <p className="text-muted-foreground mt-2">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
}
