export const ALL_PRODUCTS = "Összes termék";

export const PRODUCT_CATEGORY = [
    "Botok", 
    "Kiegészítők", 
    "Orsók", 
    "Táskák és Camping", 
    "Zsinórok"
];

/**
 * Processes a string by converting it to lowercase, removing diacritics (accents),
 * and eliminating whitespace.
 *
 * @param {string} category - The input string to be processed.
 * @returns {string} - The processed string without accents and spaces.
 *
 * @example
 * const processedString = processString("Kiegészítők");
 * console.log(processedString); // Outputs: "kiegeszitok"
 */
export const processString = (category: string): string => {
    return category
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // removes accents
      .replace(/\s/g, ''); // remove spaces
};