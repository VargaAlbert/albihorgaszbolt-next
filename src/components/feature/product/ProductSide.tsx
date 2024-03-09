"use client"

import React from 'react'
import Image from 'next/image';
import ProductSideMain from '@/components/UI/product/ProductSideMain';

type ProductProps = {
    product: productT;
};

export default function ProductSide({ product }: ProductProps) {
    return (
        <main className='min-w-screen-min'>
            <section className='container mx-auto max-w-screen-2xl'>
                <section className='my-8 flex flex-col justify-center lg:flex-row'>
                    <img
                        src={product.img}
                        alt={`${product.productid}-image`}
                        width={"90%"}
                        height={300}
                        className='max-w-lg' />

                    <ProductSideMain productData={product} />
                </section>
            </section>
        </main>
    )
}
