"use client"

import React from 'react'
import logo from '@/assets/logo.png'
import Link from 'next/link'
import Image from 'next/image';

export default function FooterLogoAndText() {
    return (
        <section className='py-2 border-t-2'>
            <Link href={'/'}>
                <Image
                    src={logo}
                    alt="Description of the image"
                    className="w-full max-w-64 h-auto"
                    priority
                />
            </Link>
            <p className="pt-4">
                Albi horgász bolt, kis és nagykerek, horgászegyesület.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur alias tempora molestias atque porro quos omnis
                debitis, sed dolore dolor accusamus dicta.
            </p>
        </section>
    )
}
