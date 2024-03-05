import React from 'react'
import { Box, Skeleton } from '@mui/material'

export default function ProductCardSkeleton() {
    return (
        <Box className='w-11/12 h-42 flex flex-col'>
                <Skeleton className="w-11/12 h-1/3" />
                <Skeleton className="w-11/12 h-1/3" />
                <Skeleton className="w-11/12 h-1/3" />
        </Box>
    )
}