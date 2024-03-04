"use client"

import React from 'react'
import { useShopContext } from '@/services/providers/ShopContext';
import ProductCartCard from '@/components/UI/product/ProductCartCard'
import { Box, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
export default function page() {
    const { cartItems } = useShopContext();

    return (
        <main className="lg:flex flex-row">
            <Box className="flex flex-col items-center m-auto lg:w-full">
                <Box className="m-auto flex items-center justify-center">
                    <ShoppingCart className='mr-2' />
                    <Typography variant="h5" color="text.primary" className="tracking-widest">
                        KOSARAM
                    </Typography>
                </Box>
                {cartItems.map((item) => (
                    <ProductCartCard key={item.productid} {...item} />
                )).reverse()}
            </Box>

            <Box
                className="w-9/12 m-auto h-40 bg-background-secondary lg:w-[320px] lg:my-12 lg:mr-14"
                sx={{ position: 'sticky'}}
            >
                {/* Tartalom */}
            </Box>


        </main >
    )
}
