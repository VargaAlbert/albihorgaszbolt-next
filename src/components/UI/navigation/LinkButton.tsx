import Link from 'next/link'
import React from 'react'

interface LinkButtonProps {
    href: string;
    label: string;
    onClick?: () => void;
}

export default function LinkButton({ href, label, onClick }: LinkButtonProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="block w-full mt-6 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">
            {label}
        </Link>
    )
}