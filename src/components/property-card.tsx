"use client";

import Image from 'next/image';
import { Bath, Bed, Star } from 'lucide-react';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Property } from '@/lib/properties';

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.id}`}>
        <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-48 w-full">
            <Image
            src={property.imageUrl}
            alt={property.title}
            fill
            className="object-cover"
            />
        </div>
        <CardHeader>
            <CardTitle className="text-lg font-bold truncate">{property.title}</CardTitle>
            <CardDescription>{property.location}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground h-10 overflow-hidden text-ellipsis">{property.description}</p>
            <div className="flex items-center justify-between text-sm text-muted-foreground mt-4">
            <div className="flex items-center gap-2">
                <Bed className="h-4 w-4" />
                <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-2">
                <Bath className="h-4 w-4" />
                <span>{property.bathrooms} Baths</span>
            </div>
            </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between mt-auto">
            <p className="text-lg font-semibold text-primary">
            ₦{Number(property.price).toLocaleString()}
            </p>
            <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{property.rating.toFixed(1)}</span>
            </div>
        </CardFooter>
        </Card>
    </Link>
  );
}
