"use client"

import React, { useEffect } from 'react'
import { notFound } from 'next/navigation'
import { useShopContext } from "@/services/providers/ShopContext";
import { LinearProgress } from '@mui/material';

import ProductPageCard from '@/components/UI/product/ProductPageCard';

type ProductProps = {
    products: productT[];
};

export default function Product({ products }: ProductProps) {

    const {
        filteredProducts,
        setFilters,
        currentPageData,
        setProductsData
    } = useShopContext();

    useEffect(() => {
        setProductsData(products)
    }, [products]);

    return (
        <section className='w-full px-8 py-2 grid grid-cols-1 gap-8 justify-center items-center justify-items-center md:grid-cols-2 lg:grid-cols-3 lg:gap-12 2xl:grid-cols-4'>
            {currentPageData().map((item) => (
                <ProductPageCard key={item.productid} {...item} />
            ))}
        </section>
    );
};