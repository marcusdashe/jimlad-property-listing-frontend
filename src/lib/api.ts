import type { Property } from './properties';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

type FetchPropertiesParams = {
  location?: string;
  minPrice?: string;
  maxPrice?: string;
};

type ApiResponse<T> = {
    success: boolean;
    message?: string;
    data: T;
    count?: number;
    filters?: any;
    errors?: { field: string; message: string }[];
};


export async function fetchProperties(params: FetchPropertiesParams): Promise<ApiResponse<Property[]>> {
  const query = new URLSearchParams();
  if (params.location) query.append('location', params.location);
  if (params.minPrice) query.append('minPrice', params.minPrice);
  if (params.maxPrice) query.append('maxPrice', params.maxPrice);

  const url = `${API_BASE_URL}/properties?${query.toString()}`;
  console.log(`Fetching properties from: ${url}`);

  try {
    const response = await fetch(url);
    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `Failed to fetch properties. Status: ${response.status}`);
    }
    return response.json();
  } catch (error: any) {
    console.error('Fetch properties error:', error);
    return { success: false, message: error.message || 'An unknown network error occurred.', data: [] };
  }
}

export async function createProperty(formData: FormData): Promise<ApiResponse<Property>> {
    const url = `${API_BASE_URL}/properties`;
    console.log(`Creating property at: ${url}`);
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || `Failed to create property. Status: ${response.status}`);
        }
        
        return responseData;
    } catch (error: any) {
        console.error('Create property error:', error);
        return { success: false, message: error.message || 'An unknown network error occurred.', data: null as any };
    }
}
