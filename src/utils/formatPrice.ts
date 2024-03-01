/**
 * Formats a numeric price by adding thousand separators.
 *
 * @param {number} price - The numeric price to be formatted.
 * @returns {string} - The formatted price as a string with thousand separators.
 *
 * @example
 * const formattedPrice = formatPrice(1234567);
 * console.log(formattedPrice); // Outputs: "1.234.567"
 */
export const formatPrice = (price: number): string =>  {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}