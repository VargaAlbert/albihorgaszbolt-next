"use client"

import BrainLeafForm from '@/components/UI/footer/BrainLeafForm'
import FooterLogoAndText from '@/components/UI/footer/FooterLogoAndText'
import FooterNavigation from '@/components/UI/footer/FooterNavigation'
export default function AppFooter() {
    return (
        <footer className='p-8 min-w-screen-min bg-background-secondary border-t-2'>
            <section className='container mx-auto max-w-screen-2xl'>
                <BrainLeafForm />
                <FooterLogoAndText />
                <FooterNavigation />
            </section>
        </footer>
    )
}
