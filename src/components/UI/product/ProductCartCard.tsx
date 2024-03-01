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
export default function ProductCartCard({ id, quantity }: CartItemT) {

    const { data, productAddCart, removeFromCart } = useShopContext();

    const item: productT | undefined = data.find((item) => item.productid === id);

    if (!item) {
        return null;
    }

    const {
        productid,
        product,
        description,
        img,
        price,
        category,
    } = item;

    const handleChange = (value: number | null) => {
        const newValue = value ?? 1
        productAddCart(newValue, id, false);
    }

    const quantityPrice = quantity * price

    const deleteIlem = () => {
        removeFromCart(id)
    }

    return (
        <Card className="flex h-42 m-3">
            <CardMedia
                component="img"
                className="w-2/5"
                image={img}
                alt={`img-${productid}`}
            />
            <Box className="flex flex-col w-3/5">

                <CardContent className="flex-1">
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
                        className='flex justify-between'
                    >
                        <Typography color="text.secondary">
                            {formatPrice(price)} Ft
                        </Typography>
                        <Typography>
                            {formatPrice(quantityPrice)} Ft
                        </Typography>
                    </Typography>

                </CardContent>

                <Box className="flex items-center justify-center pl-1 pb-1">
                    <ProductNumberInput value={quantity} onChange={handleChange} />
                </Box>
            </Box>
        </Card>
    )
}
