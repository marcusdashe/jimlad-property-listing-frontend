import type { Property } from './properties';

const API_BASE_URL = '/api';

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
        const errorText = await response.text();
        console.error("API response not OK:", response.status, errorText);
        throw new Error(`Failed to fetch properties. Status: ${response.status}. Response: ${errorText}`);
    }
    return response.json();
  } catch (error: any) {
    console.error('Fetch properties error:', error);
    // Return a structured error that the frontend can display
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

        // Use response.json() to get the body for both success and error cases
        const responseData = await response.json();

        if (!response.ok) {
            // If response is not ok, use the message from the JSON body
            throw new Error(responseData.message || `Failed to create property. Status: ${response.status}`);
        }
        
        return responseData;
    } catch (error: any) {
        console.error('Create property error:', error);
        // Ensure even network errors or non-JSON responses are handled gracefully
        return { 
            success: false, 
            message: error.message || 'An unknown network error occurred.', 
            data: null as any,
            // If the error response contains validation errors, pass them along
            errors: error.errors || undefined
        };
    }
}
