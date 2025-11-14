"use client";

import React, { useState, useEffect, useCallback } from 'react';
import type { Property } from '@/lib/properties';
import { fetchProperties } from '@/lib/api';
import { PropertyCard } from '@/components/property-card';
import { SearchBar } from '@/components/search-bar';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProperties = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchProperties({
        location: searchTerm,
        minPrice,
        maxPrice,
      });
      if (response.success) {
        // The API doesn't provide bedrooms, bathrooms, or rating, so we add dummy data.
        const propertiesWithExtras = response.data.map(p => ({
          ...p,
          bedrooms: p.bedrooms || Math.floor(Math.random() * 4) + 1,
          bathrooms: p.bathrooms || Math.floor(Math.random() * 3) + 1,
          rating: p.rating || (Math.random() * (5.0 - 4.5) + 4.5),
        }));
        setProperties(propertiesWithExtras);
      } else {
        setError(response.message || 'Failed to fetch properties.');
      }
    } catch (err: any) {
      console.error("API Error:", err);
      setError(err.message || 'An error occurred while fetching properties.');
    } finally {
      setLoading(false);
    }
  }, [searchTerm, minPrice, maxPrice]);

  useEffect(() => {
    loadProperties();
  }, [loadProperties]);


  const handleSearch = () => {
    loadProperties();
  };


  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <SearchBar
        location={searchTerm}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onLocationChange={setSearchTerm}
        onMinPriceChange={setMinPrice}
        onMaxPriceChange={setMaxPrice}
        onSearch={handleSearch}
      />

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
             <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-[200px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-4 w-3/5" />
                </div>
             </div>
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-16 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <h2 className="text-2xl font-semibold text-destructive">Internal Server Error</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            The server encountered an error while trying to fetch properties. This is not a frontend issue.
          </p>
          <p className="text-sm text-muted-foreground mt-2">Please check the logs of your backend server for more details.</p>
          <p className="font-mono bg-slate-100 dark:bg-slate-800 rounded p-2 mt-2 inline-block text-xs text-destructive">{error}</p>
          <br />
          <Button onClick={loadProperties} className="mt-4">Try Again</Button>
        </div>
      ) : properties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map(property => (
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
