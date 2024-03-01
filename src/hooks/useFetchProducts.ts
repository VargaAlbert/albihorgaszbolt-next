import { useState, useEffect, useRef } from 'react';
import axios from '@/services/api/axiosConfig';

/**
 * @fileOverview Custom React hook for fetching data from the server using Axios.
 * @module useFetchData
 */

// Interface representing the return type of useFetchData
export interface UseFetchData {
  data: productT[];
  loading: boolean;
  error: string | null;
}

/**
 * A custom hook for fetching data from the server using Axios.
 * The definition for ProductT can be found in @/services/types.d.ts
 *
 * @returns {UseFetchData} - The fetched data, loading state, and error information.
 * @property {ProductT[]} data - The fetched data.
 * @property {boolean} loading - Indicates whether the data is still being fetched.
 * @property {string | null} error - Error message if fetching data encounters an error, otherwise null.
 * 
 * @example
 * const { data, loading, error } = useFetchData();
 */
const useFetchData = (): UseFetchData => {
  // State for storing fetched data
  const [data, setData] = useState<productT[]>([]);
  
  // State for indicating whether data is still being fetched
  const [loading, setLoading] = useState<boolean>(true);
  
  // State for storing error information, if any
  const [error, setError] = useState<string | null>(null);

  // Ref to track whether the effect is running to prevent unnecessary fetch on cleanup
  const effectRun = useRef(false);

  useEffect(() => {
    // Function for fetching data from the server
    const fetchData = async () => {
      try {
        // Make a request to the server using Axios
        const response = await axios<productT[]>('/products', {
          withCredentials: true
        });

        // Check if the response contains data
        if (!response.data) {
          throw new Error('The query was unsuccessful.');
        }

        // Set the fetched data to the state
        setData(response.data);
      } catch (error: any) {
        // Set error state if an error occurs during the fetch
        setError(error.message || 'An error occurred during the query.');
      } finally {
        // Set loading state to false when the fetch is complete
        setLoading(false);
      }
    };

    // If the effect is running (not during cleanup), initiate the data fetch
    if (effectRun.current) {
      fetchData();
    }

    // Set effectRun to true after the first render
    return () => {
      effectRun.current = true;
    };

  }, []); // The effect runs only on mount

  // Return an object containing fetched data, loading state, and error information
  return { data, loading, error };
};

export default useFetchData;

