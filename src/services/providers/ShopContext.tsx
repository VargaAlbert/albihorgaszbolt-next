"use client"

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
    ChangeEvent,
} from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

import {
    initAuth,
    initFilter
} from "../initConfig";

import useUserInterfaceDisplay, { UseUserInterfaceDisplayInterface } from "@/hooks/useUserInterfaceDisplay";
import useFetchData, { UseFetchData } from "@/hooks/useFetchProducts";
import useProductAddCart, { UseProductAddCart } from "@/hooks/useProductsAddCart";
import useProductsFilter, { UseProductsFilterInterface } from "@/hooks/useProductsFilter";
import usePagination, { UsePaginationInterface } from "@/hooks/usePagination";

type ShopProviderProps = {
    children: ReactNode;
};

export interface ShopContextProps
    extends
    UsePaginationInterface,
    UseProductsFilterInterface,
    UseProductAddCart,
    UseUserInterfaceDisplayInterface {
    setProductsData: React.Dispatch<React.SetStateAction<productT[]>>;
    setPersist: React.Dispatch<React.SetStateAction<boolean>>;
    setAuth: React.Dispatch<React.SetStateAction<authT>>;

    auth: authT;
    persist: boolean;
};

export const ShopContext = createContext({} as ShopContextProps)

export const useShopContext = () => {
    return useContext(ShopContext);
};

export const ShopProvider: React.FC<ShopProviderProps> = ({
    children
}) => {

    const [productsData, setProductsData] = useState<productT[]>([]);
    const [auth, setAuth] = useState<authT>(initAuth);
    const [persist, setPersist] = useLocalStorage<boolean>("persist", false);

    const { userInterfaceDisplay, setUserInterface, toggleDrawer } = useUserInterfaceDisplay();

    const { cartItems, productAddCart, removeFromCart } = useProductAddCart();

    const { filteredProducts, filters, setFilters } = useProductsFilter(productsData);

    const { page, maxPage, currentPageData, handleChangePage, setPageOfNumber } = usePagination(filteredProducts, 6);

    const contextValue: ShopContextProps = {

        setAuth,
        auth,
        persist,
        setPersist,
        setProductsData,

        /* --useUserInterfaceDisplay-- */
        userInterfaceDisplay, setUserInterface, toggleDrawer,
        /* --useProductAddCart-- */
        cartItems, productAddCart, removeFromCart,
        /* --useProductsFilter-- */
        filteredProducts, filters, setFilters,
        /* --usePagination-- */
        page, maxPage, currentPageData, handleChangePage, setPageOfNumber
        /* ------ */
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContext;