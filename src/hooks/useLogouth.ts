import { useShopContext } from '@/services/providers/ShopContext';
import axios from '@/services/api/axiosConfig';
import { initAuth } from '@/services/initConfig';

/**
 * A custom hook for handling user logout functionality.
 * This hook uses the ShopContext to update the authentication state and performs a logout API request.
 *
 * @returns {() => Promise<void>} - A function that triggers the logout process.
 * @example
 * const handleLogout = useLogout();
 * handleLogout();
 */
const useLogout = (): (() => Promise<void>) => {
    const { setAuth } = useShopContext();

    /**
     * Asynchronous function that triggers the logout process.
     * It resets the authentication state in the context and sends a logout request to the server.
     *
     * @returns {Promise<void>} - A promise that resolves after the logout process is completed.
     */
    const logout = async (): Promise<void> => {
        setAuth(initAuth);
        try {
            const response = await axios('/logout', {
                withCredentials: true,
            });
            // Handle response if needed
        } catch (err) {
            console.error(err);
            // Handle error if needed
        }
    };

    return logout;
};

export default useLogout;
