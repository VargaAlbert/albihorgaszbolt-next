import useLocalStorage from './useLocalStorage';

/**
 * @fileOverview Custom React hook for managing shopping cart items.
 * @module useProductAddCart
 */

// Interface representing the return type of useProductAddCart
export interface UseProductAddCart {
    productAddCart: (quantityOfProduct: number, id: string, isSelfIncrease: boolean) => void;
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
     * Adds or updates a product in the shopping cart.
     * @param {number} quantityOfProduct - Quantity of the product to add or update.
     * @param {string} id - Product identifier.
     * @param {boolean} isSelfIncrease - Indicates whether to increase the quantity if the product is already in the cart.
     * @returns {void}
     */
    const productAddCart = (quantityOfProduct: number, id: string, isSelfIncrease: boolean): void => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
                return [...currItems, { id, quantity: quantityOfProduct }];
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        const quantityValue = isSelfIncrease
                            ? item.quantity + quantityOfProduct
                            : quantityOfProduct;

                        return {
                            ...item,
                            quantity: quantityValue,
                        };
                    }
                    return item;
                });
            }
        }); 
    };

    /**
     * Removes a product from the shopping cart.
     * @param {string} id - Product identifier to remove.
     * @returns {void}
     */
    const removeFromCart = (id: string): void => {
        setCartItems((currItems) => {
            return currItems.filter((item) => item.id !== id);
        });
    };

    /**
     * Finds the quantity of a product in the shopping cart by its id.
     * @param {string} id - Product identifier to search for.
     * @returns {number | null} - Quantity of the product if found, or null if not found.
     * @private
     */
    const findQuantityById = (id: string): number | null => {
        return cartItems.find((item) => item.id === id)?.quantity || null;
    };

    // Return an object containing cartItems, productAddCart, removeFromCart, and findQuantityById
    return { cartItems, productAddCart, removeFromCart };
};

export default useProductAddCart;

