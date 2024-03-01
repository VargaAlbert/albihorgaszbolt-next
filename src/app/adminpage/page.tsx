"use client"

import React from 'react'
import Users from '@/components/UI/authentication/Users'

export default function page() {
    return (
        <section className='flex flex-col justify-start items-center h-screen'>
            <h2 className='mt-6 text-4xl'>ADMIN PAGE</h2>
            <p className='mt-4 text-center mx-8'></p>
            <Users />
        </section>
    )
}