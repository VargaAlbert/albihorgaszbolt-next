import React from 'react'
import { fetchProductById } from '@/services/api/fetchProduct'
import { notFound } from "next/navigation"
import Product from '@/components/feature/product/Product'
import ProductSide from '@/components/feature/product/ProductSide'

type Props = {
    params: {
        productId: string
    }
}

export default async function ProductPage({ params: { productId } }: Props) {
    try {
        const productData = await fetchProductById(productId);

        if (!productData.product) {
            throw new Error('No products found.');
        }

        return (
           <ProductSide product={productData.product}/>
        );
    } catch (error: any) {
        console.error('Error in ProductPage:', error.message);
        notFound();
    } 
}