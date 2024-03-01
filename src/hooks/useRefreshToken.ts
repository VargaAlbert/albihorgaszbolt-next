import axios from '@/services/api/axiosConfig';
import { useShopContext } from '@/services/providers/ShopContext';

/**
 * A custom hook for refreshing the user's access token.
 * The authT definition can be found in @/services/types.d.ts
 * 
 * @returns {() => Promise<string>} - A function that triggers the token refresh and returns the new access token.
 * @example
 * const handleRefresh = useRefreshToken();
 * const newAccessToken = await handleRefresh();
 */
const useRefreshToken = (): (() => Promise<string>) => {
    const { setAuth } = useShopContext();

    /**
     * Asynchronous function to refresh the user's access token.
     *
     * @returns {Promise<string>} - A promise that resolves with the new access token.
     * @throws Will throw an error if the refresh fails.
     * @private
     */
    const refresh = async (): Promise<string> => {
        try {
            const response = await axios.get('/refresh', {
                withCredentials: true
            });

            setAuth((prev: authT) => {
                return {
                    ...prev,
                    roles: response.data.roles,
                    accessToken: response.data.accessToken
                }
            });

            return response.data.accessToken;
        } catch (error) {
            console.error('Token refresh failed:', error);
            throw new Error('Token refresh failed.');
        }
    }

    return refresh;
};

export default useRefreshToken;