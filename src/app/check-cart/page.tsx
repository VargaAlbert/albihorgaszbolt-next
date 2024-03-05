"use client"

import React from 'react'
import { useShopContext } from '@/services/providers/ShopContext';
import ProductCartCard from '@/components/UI/product/ProductCartCard'
import { Box, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import ProductCartCardSkeleton from '@/components/UI/product/ProductCartCardSkeleton';
import Link from 'next/link';
import { SHIPPING_FREE, FREE_SENDING_LIMIT } from '@/services/initConfig'
import { isFreeShoping } from '@/utils/isFreeShoping';
import { formatPrice } from '@/utils/formatPrice';
export default function page() {
    const { cartItems, loading, shopCardSum } = useShopContext();

    return (
        <main className="container min-w-screen-min mx-auto max-w-screen-2xl relative lg:flex lg:flex-row">

            <Box className="pt-6 flex flex-col items-center m-auto lg:w-full">
                <Box className="m-auto flex items-center justify-center">
                    <ShoppingCart className='mr-2' />
                    <Typography variant="h5" color="text.primary" className="tracking-widest">
                        KOSARAM
                    </Typography>
                </Box>

                {loading ? (
                    <ProductCartCardSkeleton />
                ) : (
                    cartItems.map((item) => (
                        <ProductCartCard key={item.productid} {...item} isPageCart={true} />
                    )).reverse()
                )}
            </Box>
            <Box
                className="w-9/12 mb-12 m-auto p-4 h-min bg-background-secondary rounded-md lg:w-[420px] lg:my-12 lg:mr-14 lg:sticky lg:top-[120px]"
            >
                <Typography className="mb-4" variant="h5" color="text.primary">
                    Összegzés:
                </Typography>
                <Box className="mb-2 flex felx-row justify-between" color="text.primary">
                    <Typography>
                        Kosár részösszeg:
                    </Typography>
                    <Typography>
                       {formatPrice(shopCardSum())} Ft.
                    </Typography>
                </Box>
                <Box className="mb-2 flex felx-row justify-between" color="text.primary">
                    <Typography >
                        Szállítási díj:
                    </Typography>
                    <Typography>
                        {formatPrice(shopCardSum() > FREE_SENDING_LIMIT ? 0 : SHIPPING_FREE)} Ft.
                    </Typography>
                </Box>
                <Box className="mb-2 flex felx-row justify-between" color="text.primary">
                    <Typography >
                        Kedvezmény:
                    </Typography>
                    <Typography>
                        0 Ft.
                    </Typography>
                </Box>
                <Box className="mb-2 flex felx-row justify-between text-xl" color="text.primary">
                    <Typography className='text-2xl'>
                        Összesen:
                    </Typography>
                    <Typography className='text-2xl'>
                        {formatPrice(isFreeShoping(shopCardSum()))} Ft.
                    </Typography>
                </Box>
                <Link
                    href="#"
                    className="block w-full mt-6 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">TOVÁBB A KASSZÁHOZ</Link>
                <Link
                    href="/"
                    className="block w-full p-auto text-text-primary hover:text-primary-500 text-center my-4">Tovább vásárlok</Link>
            </Box>
        </main >
    )
}
