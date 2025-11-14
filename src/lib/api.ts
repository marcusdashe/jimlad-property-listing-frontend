import type { Property } from './properties';

const API_BASE_URL = 'http://localhost:3000';

type FetchPropertiesParams = {
  location?: string;
  minPrice?: string;
  maxPrice?: string;
};

type FetchPropertiesResponse = {
  success: boolean;
  count: number;
  filters: any;
  data: Property[];
  message?: string;
};

export async function fetchProperties(params: FetchPropertiesParams): Promise<FetchPropertiesResponse> {
  const query = new URLSearchParams();
  if (params.location) query.append('location', params.location);
  if (params.minPrice) query.append('minPrice', params.minPrice);
  if (params.maxPrice) query.append('maxPrice', params.maxPrice);

  const response = await fetch(`${API_BASE_URL}/properties?${query.toString()}`);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'An unknown error occurred' }));
    throw new Error(errorData.message || 'Failed to fetch properties');
  }

  return response.json();
}
