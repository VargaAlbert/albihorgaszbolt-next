"use client"

import React from 'react'
import { Box, Typography } from '@mui/material'

export default function BrainLeafForm() {
    return (
        <Box>
            <Typography variant="h3" color="text.primary" className="m-auto text-center">
                Iratkozz fel hírlevelünkre!
            </Typography>
            <Typography variant="h5" color="text.secondary" className="m-auto text-center my-4">
                Mindig értesülj akcióinkról, újdonságainkról, és tartsd napra készre a horgász tudásod.
            </Typography>
            <form>

                <div className='lg:flex flex-row items-center'>
                    <input
                        type="text"
                        placeholder="Neved"
                        className='brainLeafFormInput' />
                    <input
                        type="email"
                        placeholder="E-mail címed."
                        className='brainLeafFormInput' />
                    <input
                        type="submit"
                        className='w-full h-12 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 lg:mx-4' />
                </div>

                <div className='m-5'>
                    <input
                        type="checkbox"
                        id="newsletterFormAfsz"
                        className='mr-3 w-4 h-4 border rounded focus:ring-1 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-primary-800' />
                    <label htmlFor="newsletterFormAfsz">
                        A gombra kattintva elfogadom a személyes adatok felhasznál hatóságát,
                        a rendelés feldolgozásához, a weboldalon történő vásárlási élmény
                        fenntartásához és más célokra., melyeket az Adatkezelési tájékoztató tartalmaz.</label>
                </div>
            </form>
        </Box>
    );
}
