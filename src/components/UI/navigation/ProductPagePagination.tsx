"use client"

import { useShopContext } from '@/services/providers/ShopContext';
import { Pagination } from '@mui/material'
export default function ProductPagePagination() {
    const { handleChangePage, page, maxPage } = useShopContext();

    return (
        <Pagination
            className='flex justify-center my-5'
            count={maxPage}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChangePage}
        />
    )
}
