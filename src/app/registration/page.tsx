import React from 'react'
import RegistrationForm from '@/components/feature/authentication/RegistrationForm'

export default function page() {
    return (
        <section className='flex flex-col justify-start items-center h-screen'>
            <h2 className='mt-6 text-4xl'>REGISZTRÁCIÓ</h2>
            <p className='mt-4 text-center mx-8'>Regisztrálj az AlbiHorgászbolt Webáruházba, és légy a törzsvásárlónk ahol egyedi kedvezményeket érhetsz el, és mindig friss akciók várnak rád.</p>
            <RegistrationForm />
        </section>
    )
}
