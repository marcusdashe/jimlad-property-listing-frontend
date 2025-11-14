"use client";

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

type SearchBarProps = {
  location: string;
  minPrice: string;
  maxPrice: string;
  onLocationChange: (value: string) => void;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
};

export function SearchBar({
  location,
  minPrice,
  maxPrice,
  onLocationChange,
  onMinPriceChange,
  onMaxPriceChange,
}: SearchBarProps) {
  return (
    <div className="mb-8 rounded-lg bg-card p-4 shadow-md sm:p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
          <label htmlFor="location" className="mb-2 block text-sm font-medium text-foreground">
            Location
          </label>
          <Input
            id="location"
            type="text"
            placeholder="City, State, or Zip Code"
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="min-price" className="mb-2 block text-sm font-medium text-foreground">
            Min Price
          </label>
          <Input
            id="min-price"
            type="number"
            placeholder="Any"
            value={minPrice}
            onChange={(e) => onMinPriceChange(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="max-price" className="mb-2 block text-sm font-medium text-foreground">
            Max Price
          </label>
          <Input
            id="max-price"
            type="number"
            placeholder="Any"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(e.target.value)}
          />
        </div>
        <div className="flex items-end">
          <Button className="w-full">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
