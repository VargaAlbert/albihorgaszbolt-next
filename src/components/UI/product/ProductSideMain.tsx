"use client"

import { Box, Button, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ProductNumberInput from './ProductNumberInput';
import { useShopContext } from '@/services/providers/ShopContext';
import { Favorite } from '@mui/icons-material';
import { formatPrice } from '@/utils/formatPrice';

type ProductSideMainProps = {
    productData: productT;
};
export default function ProductSideMain({ productData }: ProductSideMainProps) {

    const { productAddCart, findQuantityById } = useShopContext();

    const { product, price, productid } = productData;

    const [productQuantity, setProductQuantity] = useState<number>(1);
    const [isClient, setIsClient] = useState<boolean>(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleChange = (value: number | null) => {
        const newValue = value ?? 1
        setProductQuantity(newValue);
    }

    const handleAddProductCart = () => {
        productAddCart(productQuantity, productid, true)
        setProductQuantity(1)
    }

    if (!isClient) return null;
    return (
        <Box className="max-w-lg p-4 w-full">
            <Typography className='text-center text-xl border-b-2 md:text-2xl'>
                {product}
            </Typography>
            <Typography component="div" className='my-10 flex justify-start border-b-2'>
                <Typography className='w-12 text-start text-xl'>
                    Ár:
                </Typography>
                <Typography className='text-center text-xl'>
                    {formatPrice(price)} Ft.
                </Typography>
            </Typography>
            <Box className="flex flex-row justify-between">
                <ProductNumberInput value={productQuantity} onChange={handleChange} />
                <Button
                    onClick={handleAddProductCart}
                    className="w-3/6 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mx-1 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">
                    Kosárba
                </Button>
                <IconButton size="small">
                    <Favorite className="text-4xl text-primary-600" />
                </IconButton>
            </Box>
        </Box>
    )
}
