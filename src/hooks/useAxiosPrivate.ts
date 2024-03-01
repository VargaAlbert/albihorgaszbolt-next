import { axiosPrivate } from '@/services/api/axiosConfig';
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { useShopContext } from '@/services/providers/ShopContext';

/**
 * Custom hook for handling private Axios requests with token authentication.
 *
 * @returns {AxiosInstance} An instance of Axios configured for private requests.
 * @throws {Error} Throws an error if authentication context or refresh token function is not provided.
 * @example
 * 
 * Usage in a React component
 * const axiosPrivate = useAxiosPrivate();
 * axiosPrivate.get('/api/data').then(response => console.log(response.data));
 */
const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useShopContext();

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth, refresh])

    return axiosPrivate;
}

export default useAxiosPrivate;