"use client"

import React from 'react';
import { formatPrice } from '@/utils/formatPrice';
import { useShopContext } from '@/services/providers/ShopContext';

import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    IconButton
} from '@mui/material';

import { Favorite } from '@mui/icons-material/';
import Link from 'next/link';

export default function ProductPageCard({
    productid,
    product,
    description,
    img,
    price,
    category,
}: productT) {

    const { cartItems, productAddCart } = useShopContext();

    return (
        <Card className='max-w-sm h-full flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 ease-in-out'>
            <Link href={`/product/${productid}`} passHref>
                <CardMedia
                    component="img"
                    alt={`img-${productid}`}
                    height="140"
                    image={img}
                    id="carouselImg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" color="text.primary" component="div">
                        {product}
                    </Typography>
                    <Typography variant="h4" color="text.primary">
                        {formatPrice(price)} Ft
                    </Typography>
                </CardContent>
            </Link>
            <CardActions>
                <Button
                    onClick={() => { productAddCart(1, productid, true) }}
                    className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">
                    Kosárba
                </Button>
                <IconButton size="small">
                    <Favorite className="text-4xl text-primary-600" />
                </IconButton>
            </CardActions>
        </Card>
    );
}