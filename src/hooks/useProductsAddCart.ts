import useLocalStorage from './useLocalStorage';

/**
 * @fileOverview Custom React hook for managing shopping cart items.
 * @module useProductAddCart
 */

// Interface representing the return type of useProductAddCart
export interface UseProductAddCart {
    productAddCart: ( 
        quantityOfProduct: number, 
        productid: string, 
        isSelfIncrease: boolean,
        img: string,
        product: string,
        price: number ) => void;
    
    productSetQuantityCart: (quantityOfProduct: number, productid: string, isSelfIncrease: boolean) => void;
    removeFromCart: (id: string) => void;
    cartItems: CartItemT[];
}

/**
 * Hook for managing shopping cart items.
 * 
 * @returns {UseProductAddCart} - An object containing cartItems, productAddCart, removeFromCart, and findQuantityById.
 * @property {CartItem[]} cartItems - Array of shopping cart items.
 * @property {Function} productAddCart - Function to add or update a product in the cart. (Public)
 * @property {Function} removeFromCart - Function to remove a product from the cart. (Public)
 * @property {Function} findQuantityById - Function to find the quantity of a product in the cart by its id. (Private)
 * 
 * @example
 * const { cartItems, productAddCart, removeFromCart, findQuantityById } = useProductAddCart();
 * productAddCart(1, 'product-id', true);
 * removeFromCart('product-id');
 * const quantity = findQuantityById('product-id');
 * The CartItem[] definition can be found in @/services/types.d.ts
 */
const useProductAddCart = (): UseProductAddCart => {
    // Retrieve or initialize shopping cart items from local storage
    const [cartItems, setCartItems] = useLocalStorage<CartItemT[]>("shopping-cart", []);

    /**
     * Adds a new item to the cart or updates an existing one.
     *
     * @param currItems - The current items in the cart.
     * @param productid - The ID of the product.
     * @param quantityOfProduct - The quantity to add or set.
     * @param isSelfIncrease - Indicates whether to increase the quantity.
     * @param img - The image URL of the product. Defaults to an empty string.
     * @param product - The name of the product. Defaults to an empty string.
     * @param price - The price of the product. Defaults to 0.
     * @returns An updated array of cart items.
     * @private
     */
    const addOrUpdateCartItem = (
        currItems: CartItemT[],
        productid: string,
        quantityOfProduct: number,
        isSelfIncrease: boolean,
        img: string = "",
        product: string = "",
        price: number = 0
    ): CartItemT[] => {
        const existingItem = currItems.find((item) => item.productid === productid);
        if (!existingItem) {
            return [
                ...currItems,
                { 
                    productid,
                    quantity: quantityOfProduct,
                    img,
                    product,
                    price,
                },
            ];
        } else {
            const quantityValue = isSelfIncrease
                ? existingItem.quantity + quantityOfProduct
                : quantityOfProduct;
    
            return currItems.map((item) =>
                item.productid === productid
                    ? {
                          ...item,
                          quantity: quantityValue,
                          img: img || item.img,
                          product: product || item.product,
                          price: price || item.price,
                      }
                    : item
            );
        }
    };
    
    /**
     * Adds a new item to the cart or updates an existing one with the specified details.
     *
     * @param quantityOfProduct - The quantity of the product to add or set.
     * @param productid - The ID of the product.
     * @param isSelfIncrease - Indicates whether to increase the quantity.
     * @param img - The image URL of the product.
     * @param product - The name of the product.
     * @param price - The price of the product.
     * @returns void
     */
    const productAddCart = (
        quantityOfProduct: number, 
        productid: string, 
        isSelfIncrease: boolean,
        img: string,
        product: string,
        price: number
    ): void => {
        setCartItems((currItems) =>
            addOrUpdateCartItem(currItems, productid, quantityOfProduct, isSelfIncrease, img, product, price)
        );
    };

    /**
     * Sets the quantity of an item in the cart or updates an existing one.
     *
     * @param quantityOfProduct - The quantity to set or add.
     * @param productid - The ID of the product.
     * @param isSelfIncrease - Indicates whether to increase the quantity.
     * @returns void
     */
    const productSetQuantityCart = (
        quantityOfProduct: number,
        productid: string,
        isSelfIncrease: boolean
    ): void => {
        setCartItems((currItems) => addOrUpdateCartItem(currItems, productid, quantityOfProduct, isSelfIncrease));
    };

    /**
     * Removes a product from the shopping cart.
     * @param {string} productid - Product identifier to remove.
     * @returns {void}
     */
    const removeFromCart = (productid: string): void => {
        setCartItems((currItems) => {
            return currItems.filter((item) => item.productid !== productid);
        });
    };

    /**
     * Finds the quantity of a product in the shopping cart by its id.
     * @param {string} productid - Product identifier to search for.
     * @returns {number | null} - Quantity of the product if found, or null if not found.
     * @private
     */
    const findQuantityById = (productid: string): number | null => {
        return cartItems.find((item) => item.productid === productid)?.quantity || null;
    };

    // Return an object containing cartItems, productAddCart, removeFromCart, and findQuantityById
    return { cartItems, productAddCart, removeFromCart, productSetQuantityCart };
};

export default useProductAddCart;