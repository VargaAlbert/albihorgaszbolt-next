"use client"

import React from 'react';
import { useShopContext } from '@/services/providers/ShopContext';
import useFetchData from "@/hooks/useFetchProducts";
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
export default function ProductCartCard({ productid, quantity }: CartItemT) {

    const { productAddCart, removeFromCart } = useShopContext();

    const { data } = useFetchData();

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
        <Card className="flex h-42 m-3 max-h-44 sm:w-11/12">
            <CardMedia
                component="img"
                className="w-2/5 sm:w-44"
                image={img}
                alt={`img-${productid}`}
            />
            <Box className="flex flex-col w-3/5 sm:w-full">

                {/*   <CardContent className="flex-1 sm:hidden">
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
                </CardContent> */}

                <CardContent className="flex-1">

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
                        <Typography color="text.secondary">
                            {formatPrice(price)} Ft
                        </Typography>

                        <Box className="flex items-center justify-center pl-1 pb-1">
                            <ProductNumberInput value={quantity} onChange={handleChange} />
                        </Box>

                        <Typography>
                            {formatPrice(quantityPrice)} Ft
                        </Typography>
                    </Box>


                </CardContent>



            </Box>
        </Card>
    )
}