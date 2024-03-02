"use client"

import React from 'react'
import { useShopContext } from '@/services/providers/ShopContext';

import {
    Box,
    List,
    Tooltip,
    IconButton,
    Typography
} from '@mui/material';

import { Close, ShoppingCart } from '@mui/icons-material';
import ProductCartCard from '@/components/UI/product/ProductCartCard';
type prop = {
    anchor: Anchor
}

export default function ProductCart({ anchor }: prop) {

    const { cartItems, toggleDrawer } = useShopContext();

    return (
        <Box
            role="presentation"
            /*  onClick={toggleDrawer(anchor, false)} */
            /* onKeyDown={toggleDrawer(anchor, false)} */
            className="w-96"
        >
            <Box className="w-100 h-12 bg-background-primary flex  flex-row">
                <Box className="m-auto flex items-center">
                    <ShoppingCart className='mr-2' />
                    <Typography variant="h5" color="text.primary" className="m-auto tracking-widest">
                        KOSARAM
                    </Typography>
                </Box>
                <Tooltip className='cursor-pointer' title="Bezárás">
                    <IconButton onClick={toggleDrawer(anchor, false)} size="large" color="inherit" className="m-2 p-0">
                        <Close
                            className='hover:text-primary-500'
                            fontSize="large"
                        />
                    </IconButton>
                </Tooltip>
            </Box>
            <List>
                {cartItems.map((item) => (
                    <ProductCartCard key={item.productid} {...item} />
                )).reverse()}
            </List>
        </Box>
    )
}
