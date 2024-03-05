"use client"

import React from 'react'
import { useShopContext } from '@/services/providers/ShopContext';
import { formatPrice } from '@/utils/formatPrice';
import {
    Box,
    List,
    Tooltip,
    IconButton,
    Typography,
    Button,
} from '@mui/material';
import { isFreeShoping } from '@/utils/isFreeShoping';
import { Close, ShoppingCart } from '@mui/icons-material';
import ProductCartCard from '@/components/UI/product/ProductCartCard';
import LinkButton from '@/components/UI/navigation/LinkButton';
import Link from 'next/link';

type prop = {
    anchor: Anchor
}

export default function ProductCart({ anchor }: prop) {

    const { cartItems, toggleDrawer, shopCardSum } = useShopContext();

    return (
        <Box
            role="presentation"
            /*  onClick={toggleDrawer(anchor, false)} */
            /* onKeyDown={toggleDrawer(anchor, false)} */
            className="w-96"
        >
            <Box className="h-12 bg-background-primary flex  flex-row">
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
                    <ProductCartCard key={item.productid} {...item} isPageCart={false} />
                )).reverse()}
            </List>

            <Box className="p-7 h-18 bg-background-primary flex flex-col fixed bottom-0">
                <Box className="flex flex-row">
                    <Typography variant="h6" color="text.primary" className="m-auto tracking-widest">
                        Összesen:
                    </Typography>
                    <Typography variant="h5" color="text.primary" className="m-auto tracking-widest">
                        {formatPrice(isFreeShoping(shopCardSum()))} Ft
                    </Typography>
                </Box>
                <Link
                    href={'/check-cart'}
                    onClick={toggleDrawer(anchor, false)}
                    className="block w-80 mt-6 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">
                    TOVÁBB A PÉNZTÁRHOZ
                </Link>
            </Box>

        </Box>
    )
}
