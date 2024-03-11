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

const footerText = {
    text1: ["Klubb kártya", "Rólunk", "Garanciális javitás"],
    text2: ["Vásárlási feltételek", "Adatvédelmi nyilatkozat", "Viszonteladóknak"],
};

export default function FooterNavigation() {
    return (
        <Box className="p-4 sm:flex sm:flex-wrap lg:flex lg:flex-wrap">
            <Box className='sm:w-1/2 lg:w-1/4'>
                <Typography variant='h5'>Általános</Typography>
                <List>
                    {footerText.text1.map((text) => {
                        return <ListItem className='p-0'><Typography variant='subtitle1' className='cursor-pointer text-text-secondary hover:text-primary-700 transition-transform'>{text}</Typography></ListItem>
                    })}
                </List>
            </Box>
            <Box className='sm:w-1/2 lg:w-1/4'>
                <Typography variant='h5'>Információ</Typography>
                <List>
                    {footerText.text2.map((text) => {
                        return <ListItem className='p-0'><Typography variant='subtitle1' className='cursor-pointer text-text-secondary hover:text-primary-700 transition-transform'>{text}</Typography></ListItem>
                    })}
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
                    <Box className='flex justify-around'><Facebook fontSize="large" className="cursor-pointer hover:text-primary-700 hover:scale-110 transition-transform"/></Box>
                    <Box className='flex justify-around'><Instagram fontSize="large" className="cursor-pointer hover:text-primary-700 hover:scale-110 transition-transform"/></Box>
                    <Box className='flex justify-around'><YouTube fontSize="large" className="cursor-pointer hover:text-primary-700 hover:scale-110 transition-transform"/></Box>
                    <Box className='flex justify-around'><X fontSize="large" className="cursor-pointer hover:text-primary-700 hover:scale-110 transition-transform"/></Box>
                </Box>
            </Box>
        </Box>
    )
}
