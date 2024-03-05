import React from 'react'
import { LinearProgress, Skeleton } from '@mui/material'
import ProductCardSkeleton from '@/components/UI/product/ProductPageCartdSkeleton'

export default function Loading() {
    const numberOfSkeletons = 6;

    const skeletonElements = Array.from({ length: numberOfSkeletons }, (_, index) => (
        <ProductCardSkeleton key={index} />
    ));

    return (
        <main>
            <section className='w-full px-8 py-2 grid grid-cols-1 gap-8 justify-center items-center justify-items-center md:grid-cols-2 lg:grid-cols-3 lg:gap-12 2xl:grid-cols-4'>
                {skeletonElements}
            </section>
        </main>
    )
}
