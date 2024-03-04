import React, { ReactNode } from 'react'
import Link from 'next/link'

interface LinkButtonProps {
    href: string;
    children: ReactNode;
    onClick?: () => void;
}

export default function LinkButton({ href, children, onClick }: LinkButtonProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="block w-full mt-6 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">
            {children}
        </Link>
    )
}