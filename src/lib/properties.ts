export type Property = {
  id: number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  rating: number;
  imageUrl: string;
};

const properties: Property[] = [
  {
    id: 1,
    title: 'Modern Downtown Loft',
    location: 'Lagos, Nigeria',
    price: 450000000,
    bedrooms: 2,
    bathrooms: 2,
    rating: 4.8,
    imageUrl: 'https://picsum.photos/seed/1/600/400',
  },
  {
    id: 2,
    title: 'Suburban Family Home',
    location: 'Abuja, Nigeria',
    price: 350000000,
    bedrooms: 4,
    bathrooms: 3,
    rating: 4.9,
    imageUrl: 'https://picsum.photos/seed/2/600/400',
  },
  {
    id: 3,
    title: 'Cozy Beachfront Cottage',
    location: 'Port Harcourt, Nigeria',
    price: 280000000,
    bedrooms: 3,
    bathrooms: 2,
    rating: 4.7,
    imageUrl: 'https://picsum.photos/seed/3/600/400',
  },
  {
    id: 4,
    title: 'Luxury Penthouse Suite',
    location: 'Lagos, Nigeria',
    price: 850000000,
    bedrooms: 3,
    bathrooms: 4,
    rating: 5.0,
    imageUrl: 'https://picsum.photos/seed/4/600/400',
  },
    {
    id: 5,
    title: 'Charming Victorian House',
    location: 'Jos, Nigeria',
    price: 150000000,
    bedrooms: 5,
    bathrooms: 4,
    rating: 4.6,
    imageUrl: 'https://picsum.photos/seed/5/600/400',
  },
  {
    id: 6,
    title: 'Rustic Mountain Cabin',
    location: 'Kano, Nigeria',
    price: 95000000,
    bedrooms: 2,
    bathrooms: 1,
    rating: 4.5,
    imageUrl: 'https://picsum.photos/seed/6/600/400',
  },
  {
    id: 7,
    title: 'Sleek Urban Apartment',
    location: 'Abuja, Nigeria',
    price: 300000000,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.8,
    imageUrl: 'https://picsum.photos/seed/7/600/400',
  },
  {
    id: 8,
    title: 'Sprawling Country Estate',
    location: 'Port Harcourt, Nigeria',
    price: 550000000,
    bedrooms: 6,
    bathrooms: 7,
    rating: 4.9,
    imageUrl: 'https://picsum.photos/seed/8/600/400',
  },
];

export function getProperties(): Property[] {
  return properties;
}
