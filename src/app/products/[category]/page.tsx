import React from 'react'
import { fetchProducByCategory } from '@/services/api/fetchProduct'
import { notFound } from "next/navigation"
import Product from '@/components/feature/product/Product'

type Props = {
    params: {
        category: string
    }
}

export default async function ProductsPage({ params: { category } }: Props) {

    try {
        const productData = await fetchProducByCategory(category);

        if (!productData.products) {
            throw new Error('No products found.');
        }

        return (
            <Product products={productData.products} />
        );
    } catch (error: any) {
        console.error('Error in ProductsPage:', error.message);
        notFound();
    }
}