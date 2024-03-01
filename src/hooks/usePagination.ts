import { useState } from "react";

/**
 * @fileOverview Custom React hook for managing UI states.
 * @module usePagination
 */


// Hook that facilitates pagination functionality
export interface UsePaginationInterface {
  page: number;
  maxPage: number;
  currentPageData: () => productT[];
  handleChangePage: (event: React.ChangeEvent<unknown>, page: number) => void;
  setPageOfNumber: (page: number) => void;
}

/**
 * Custom React hook for managing pagination.
 * 
 * @param {ProductT[]} products - Array containing all products.
 * @param {number} itemsPerPage - Number of items to display per page.
 * @returns {UsePaginationInterface} - Object containing pagination state and operations.
 * @example
 * const { page, maxPage, currentPageData, handleChangePage } = usePagination(allProducts, 10);
 */
const usePagination = (products: productT[], itemsPerPage: number): UsePaginationInterface => {
  // State for managing current page number
  const [page, setPage] = useState(1);

  // State for managing current page during operations
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the maximum page based on the number of items per page
  const maxPage = Math.ceil(products.length / itemsPerPage);

  /**
   * Retrieves data for the current page.
   * @returns {ProductT[]} - Array of products for the current page.
   * @public
   */
  const currentPageData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  /**
   * Set page of number.
   * @param {number} page - The new page number.
   * @public
   */
  const setPageOfNumber = (page : number) => {
    setPage(page);
    jumpPage(page);
  }

  /**
   * Handles page change.
   * @param {React.ChangeEvent<unknown>} event - The event object.
   * @param {number} page - The new page number.
   * @public
   */
  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setPageOfNumber(page)
  };


  /**
   * Handles page jump.
   * @param {number} page - The new page number.
   * @private
   */
  const jumpPage = (page: number) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
  }

  // Return an object containing pagination state and operations
  return { page, maxPage, currentPageData, handleChangePage, setPageOfNumber };
}

export default usePagination;
