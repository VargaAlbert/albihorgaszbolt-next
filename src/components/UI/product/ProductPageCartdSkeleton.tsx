import React from 'react'
import { Box, Skeleton } from '@mui/material'

export default function ProductCardSkeleton() {
    return (
        <Box className='w-full h-full flex flex-col justify-between transform'>
            <Skeleton variant="rectangular" width="100%" height={240} />
            <Skeleton width="100%" height={40} />
            <Skeleton width="90%" height={40} />
            <Skeleton width="60%" height={80} />
            <Skeleton width="100%" height={60} />
        </Box>
    )
}
