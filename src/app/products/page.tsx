import React from 'react'
import { fetchProducAll } from '@/services/api/fetchProduct'
import { notFound } from "next/navigation"
import Product from '@/components/feature/product/Product'

export default async function ProductsPage() {
    try {
        const productData = await fetchProducAll();
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