"use client"

import React from 'react';
import { useShopContext } from '@/services/providers/ShopContext';

import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Tooltip,
    Typography,
    IconButton,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import { formatPrice } from '@/utils/formatPrice';
import ProductNumberInput from '@/components/UI/product/ProductNumberInput'

type ProductCartCardProp = {
    productid: string;
    quantity: number;
    isPageCart: boolean;
}

export default function ProductCartCard({ productid, quantity, isPageCart }: ProductCartCardProp) {

    const { productAddCart, removeFromCart, data } = useShopContext();

    const item: productT | undefined = data.find((item) => item.productid === productid);

    if (!item) {
        return null;
    }

    const {
        product,
        description,
        img,
        price,
        category,
    } = item;

    const handleChange = (value: number | null) => {
        const newValue = value ?? 1
        productAddCart(newValue, productid, false);
    }

    const quantityPrice = quantity * price

    const deleteIlem = () => {
        removeFromCart(productid)
    }

    return (
        <Card
            className={isPageCart ? "flex h-42 m-3 w-11/12" : "flex h-42 m-3 max-h-44"}
        >
            <CardMedia
                component="img"
                className={isPageCart ? "w-2/5 sm:w-44" : "w-2/5"}
                image={img}
                alt={`img-${productid}`}
            />
            <Box className="flex flex-col w-3/5 sm:w-full">
                {isPageCart ? (
                    <>
                        <CardContent className="hidden flex-1 sm:block">
                            <Typography component="div" className='flex justify-between h-1/2'>
                                <Typography className='w-11/12 text-xl'>
                                    {product}
                                </Typography>
                                <Tooltip title="Törlés">
                                    <IconButton onClick={deleteIlem} color="inherit" size="medium" className="p-0 h-8">
                                        <DeleteIcon fontSize="medium" className='hover:text-primary-500' />
                                    </IconButton>
                                </Tooltip>
                            </Typography>
                            <Box className='flex justify-between items-center' >
                                <Typography variant="h6" color="text.secondary">
                                    {formatPrice(price)} Ft
                                </Typography>
                                <Box className="flex items-center justify-center pl-1 pb-1">
                                    <ProductNumberInput value={quantity} onChange={handleChange} />
                                </Box>
                                <Typography className="w-40 text-end" variant="h5">
                                    {formatPrice(quantityPrice)} Ft
                                </Typography>
                            </Box>
                        </CardContent>
                        <CardContent className="w-full flex-1 flex flex-col justify-between sm:hidden">
                            <Typography component="div" className='flex justify-between'>
                                <Typography className='text-xs'>
                                    {product}
                                </Typography>
                                <Tooltip title="Törlés">
                                    <IconButton onClick={deleteIlem} color="inherit" size="medium" className="p-0 h-8">
                                        <DeleteIcon fontSize="medium" className='hover:text-primary-500' />
                                    </IconButton>
                                </Tooltip>
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                component="div"
                                className='flex justify-between'>
                                <Typography color="text.secondary">
                                    {formatPrice(price)} Ft
                                </Typography>
                                <Typography>
                                    {formatPrice(quantityPrice)} Ft
                                </Typography>
                            </Typography>
                            <Box className="flex items-center justify-center pl-1">
                                <ProductNumberInput value={quantity} onChange={handleChange} />
                            </Box>
                        </CardContent>
                    </>
                ) : (
                    <CardContent className="!p-2 flex-1 flex flex-col justify-between">
                        <Typography component="div" className='mb-2 flex justify-between'>
                            <Typography className='text-xs'>
                                {product}
                            </Typography>
                            <Tooltip title="Törlés">
                                <IconButton onClick={deleteIlem} color="inherit" size="medium" className="p-0 h-8">
                                    <DeleteIcon fontSize="medium" className='hover:text-primary-500' />
                                </IconButton>
                            </Tooltip>
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="div"
                            className='mb-2 flex justify-between'> 
                            <Typography color="text.secondary" className="text-xs">
                                {formatPrice(price)} Ft
                            </Typography>
                            <Typography  className="text-sm">
                                {formatPrice(quantityPrice)} Ft
                            </Typography>
                        </Typography>
                        <Box className="flex items-center justify-center pl-1">
                            <ProductNumberInput value={quantity} onChange={handleChange} />
                        </Box>
                    </CardContent>
                )}
            </Box>
        </Card>
    )
}