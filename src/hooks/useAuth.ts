import { useContext, useDebugValue } from "react";
import ShopContext, { ShopContextProps } from '@/services/providers/ShopContext';

/**
 * A custom hook for accessing authentication-related information from the ShopContext.
 *
 * @returns {ShopContextProps} The authentication context containing user information.
 * @example
 * const authContext = useAuth();
 * console.log(authContext.auth); // Access the authentication information.
 */
const useAuth = (): ShopContextProps => {
    const { auth } = useContext(ShopContext);

    // Display authentication status in React DevTools
    useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out");

    return useContext(ShopContext);
}

export default useAuth;