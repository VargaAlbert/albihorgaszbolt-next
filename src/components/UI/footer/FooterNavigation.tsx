"use client"

import React from 'react'
import {
    Box,
    Drawer,
    Button,
    List,
    Tooltip,
    IconButton,
    Typography,
    ListItem
} from '@mui/material';
import {
    Place,
    LocalPhone,
    Email,
    Facebook,
    Instagram,
    YouTube,
    X
} from '@mui/icons-material';

export default function FooterNavigation() {
    return (
        <Box className="p-4 sm:flex sm:flex-wrap lg:flex lg:flex-wrap">
            <Box className='sm:w-1/2 lg:w-1/4'>
                <Typography variant='h5'>Általános</Typography>
                <List>
                    <ListItem className="footerLink">Klubb kártya</ListItem>
                    <ListItem className="footerLink">Rólunk</ListItem>
                    <ListItem className="footerLink">Garanciális javitás</ListItem>
                </List>
            </Box>
            <Box className='sm:w-1/2 lg:w-1/4'>
                <Typography variant='h5'>Információ</Typography>
                <List>
                    <ListItem className="footerLink">Vásárlási feltételek</ListItem>
                    <ListItem className='footerLink'>Adatvédelmi nyilatkozat</ListItem>
                    <ListItem className='footerLink'>Viszonteladóknak</ListItem>
                </List>
            </Box>
            <Box className='sm:w-1/2 lg:w-1/4'>
                <Typography variant='h5'>Kapcsolat</Typography>
                <List>
                    <ListItem>
                        <Place className='mr-2' /> Debrecen
                    </ListItem>
                    <ListItem>
                        <LocalPhone className='mr-2' /> +36 55 555 5555
                    </ListItem>
                    <ListItem>
                        <Email className='mr-2' /> horgaszbolt@gmail.com
                    </ListItem>
                </List>
            </Box>
            <Box className='sm:w-1/2 lg:w-1/4'>
                <Typography variant='h5' className='py-4 sm:text-center'>Media</Typography>
                <Box className='w-full flex justify-around sm:flex sm:flex-wrap'>
                    <Facebook fontSize="large" className='footerIcon' />
                    <Instagram fontSize="large" className='footerIcon' />
                    <YouTube fontSize="large" className='footerIcon' />
                    <X fontSize="large" className='footerIcon' />
                </Box>
            </Box>
        </Box>
    )
}
