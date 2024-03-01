"use client"

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useShopContext } from '@/services/providers/ShopContext';

import useRefreshToken from '@/hooks/useRefreshToken';

import { LinearProgress } from '@mui/material';

type PersistLoginProps = {
    children: React.ReactNode;
}

const PersistLogin: React.FC<PersistLoginProps> = ({ children }) => {

    const { auth, persist } = useShopContext();

    const [isLoading, setIsLoading] = useState(true);
    const effectRun = useRef(false);

    const refresh = useRefreshToken();
    const router = useRouter();

    useEffect(() => {
        const currentPath = window.location.pathname;
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            }
            catch (err) { }
            finally {
                router.push(currentPath, undefined);
                setIsLoading(false);
            }
        }
        if (effectRun.current) {
            !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);
        }
        return () => {
            effectRun.current = true;
        };
    }, [])

    useEffect(() => {
        /*         console.log(`isLoading: ${isLoading}`)
                console.log(`aT: ${JSON.stringify(auth?.accessToken)}`) */
    }, [isLoading])

    if (!auth?.accessToken) {
        return (
            <>{children}</>
        );
    }

    return (
        <>
            {!isLoading ? <>{children}</> :
                <div className="flex items-center justify-center h-screen">
                    <LinearProgress className="w-1/2" color="inherit" />
                </div>

            }
        </>
    )
};

export default PersistLogin;
