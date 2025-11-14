"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { fetchPropertyById } from '@/lib/api';
import type { Property } from '@/lib/properties';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Bath, Bed, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function PropertyDetailsPage() {
  const { id } = useParams();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const loadProperty = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetchPropertyById(id as string);
          if (response.success) {
            // The API doesn't provide bedrooms, bathrooms, or rating, so we add dummy data.
            const propertyData = {
                ...response.data,
                bedrooms: response.data.bedrooms || Math.floor(Math.random() * 4) + 1,
                bathrooms: response.data.bathrooms || Math.floor(Math.random() * 3) + 1,
                rating: response.data.rating || (Math.random() * (5.0 - 4.5) + 4.5),
            }
            setProperty(propertyData);
          } else {
            setError(response.message || 'Failed to fetch property details.');
          }
        } catch (err: any) {
          setError(err.message || 'An error occurred while fetching property details.');
        } finally {
          setLoading(false);
        }
      };
      loadProperty();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Skeleton className="h-96 w-full rounded-lg mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-20 w-full" />
            </div>
            <div>
                <Skeleton className="h-48 w-full" />
            </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-semibold text-destructive">Error</h2>
        <p className="text-muted-foreground mt-2">{error}</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-semibold text-primary">Property Not Found</h2>
        <p className="text-muted-foreground mt-2">The property you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Image Gallery */}
      <div className="relative h-96 w-full overflow-hidden rounded-lg mb-8">
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-primary">{property.title}</h1>
            <div className="flex items-center gap-2 text-muted-foreground mt-2">
                <MapPin className="h-5 w-5" />
                <span>{property.location}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-lg">
            <div className="flex items-center gap-2">
                <Bed className="h-6 w-6 text-primary" />
                <span>{property.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center gap-2">
                <Bath className="h-6 w-6 text-primary" />
                <span>{property.bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center gap-2">
                <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                <span className="font-bold">{property.rating.toFixed(1)}</span>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">About this property</h2>
            <p className="text-muted-foreground leading-relaxed">{property.description}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
                <p className="text-3xl font-bold text-primary mb-4">
                    ₦{Number(property.price).toLocaleString()}
                </p>
                <Button className="w-full text-lg" size="lg">Contact Agent</Button>
            </CardContent>
          </Card>
           <Card>
            <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-lg">Agent Information</h3>
                 <p className="text-muted-foreground text-sm">Details about the agent would go here. For now, this is just a placeholder.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
