import useLocalStorage from "./useLocalStorage";
import { MAX_PRODUCT_LIMIT_CART } from "./../services/initConfig";

/**
 * @fileOverview Custom React hook for managing shopping cart items.
 * @module useProductAddCart
 */

// Interface representing the return type of useProductAddCart
export interface UseProductAddCart {
  productAddCart: (
    quantityOfProduct: number,
    id: string,
    isSelfIncrease: boolean
  ) => void | null;
  shopCardSum: () => number;
  removeFromCart: (id: string) => void;
  cartAllQuantity: () => number;
  findQuantityById:(id: string) => number | null
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
const useProductAddCart = (data: productT[]): UseProductAddCart => {
  // Retrieve or initialize shopping cart items from local storage
  const [cartItems, setCartItems] = useLocalStorage<CartItemT[]>(
    "shopping-cart",
    []
  );

  /**
   * Adds or updates a product in the shopping cart.
   * @param {number} quantityOfProduct - Quantity of the product to add or update.
   * @param {string} productid - Product identifier.
   * @param {boolean} isSelfIncrease - Indicates whether to increase the quantity if the product is already in the cart.
   * @returns {void}
   */
  const productAddCart = (
    quantityOfProduct: number,
    productid: string,
    isSelfIncrease: boolean
  ): void | null => {

    if(findQuantityById(productid) === MAX_PRODUCT_LIMIT_CART) return null;
    
    setCartItems((currItems) => {
      const existingItem = currItems.find(
        (item) => item.productid === productid
      );
      if (!existingItem) {
        return [
          ...currItems,
          {
            productid,
            quantity: quantityOfProduct,
          },
        ];
      } else {
        return currItems.map((item) => {
          if (item.productid === productid) {
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

  const limit = (quantity: number): number => {
    return quantity > MAX_PRODUCT_LIMIT_CART
      ? MAX_PRODUCT_LIMIT_CART
      : quantity;
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
   * @param {string} id - Product identifier to search for.
   * @returns {number | null} - Quantity of the product if found, or null if not found.
   */
  const findQuantityById = (id: string): number | null => {
    return cartItems.find((item) => item.productid === id)?.quantity || null;
  };

  /**
   * The shopping cart determines the quantity of the product
   * @returns {number} - Quantity of the product if found, or null if not found.
   */
  const cartAllQuantity = () => {
    return (
      cartItems.reduce((quantity, item) => item.quantity + quantity, 0) | 0
    );
  };

  const shopCardSum = () => {
    const value = cartItems.reduce((total, cartItem) => {
      const item = data.find((i) => i.productid === cartItem.productid);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0);

    return value;
  };

  return {
    cartItems,
    productAddCart,
    removeFromCart,
    cartAllQuantity,
    shopCardSum,
    findQuantityById,
  };
};

export default useProductAddCart;
