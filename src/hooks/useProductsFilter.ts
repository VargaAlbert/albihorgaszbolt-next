import { initFilter } from '@/services/initConfig';
import { useMemo, useState } from 'react';

/**
 * @fileOverview Custom React hook for filtering products based on a given filter.
 * @module useProductsFilter
 */

// Interface representing the return type of useProductsFilter
export interface UseProductsFilterInterface {
    filteredProducts: productT[];
    filters: filterT;
    setFilters: React.Dispatch<React.SetStateAction<filterT>>;
}

/**
 * A custom hook for filtering products based on a given filter.
 * The definition for ProductT and FilterT can be found in @/services/types.d.ts
 * 
 * @param {ProductT[]} products - The array of products to filter.
 * @param {FilterT} filter - The filter object to apply.
 * @returns {UseProductsFilterInterface} - An object containing filtered products, filters, and setFilters function.
 * @example
 * const { filteredProducts, filters, setFilters } = useProductsFilter(allProducts, { category: 'Electronics' });
 */
const useProductsFilter = (products: productT[]): UseProductsFilterInterface => {
    
    // State for managing filters
    const [filters, setFilters] = useState<filterT>(initFilter);

    // Memoized and filtered products based on the current filter
    const filteredProducts = useMemo(() => {

        const copyProducts: productT[] = [...products];
        const { category } = filters;

        if (category) {
            return copyProducts.filter((item) => item.category === category);
        }

        return copyProducts;
    }, [filters, products, products.length]);

    // Return an object containing filtered products, filters, and setFilters function
    return { filteredProducts, filters, setFilters };
}

export default useProductsFilter;
