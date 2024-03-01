"use client"

import { Paper, Button } from "@mui/material";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Tooltip,
    Typography,
    IconButton,
    CardActions
} from '@mui/material';
import React from 'react'

type propT = {
    id: number
    image: string
    title: string
    description: string
    buttonText: string
}

export default function HomeCarouselItem({
    id,
    image,
    title,
    description,
    buttonText
}: propT) {
    return (
        <Card className="w-full h-full flex flex-col lg:flex-row-reverse">

            <CardMedia
                component="img"
                src={image}
                alt={title}
                className="w-full object-cover importantCarouselWidth"
            />

            <Box className="p-2 pb-10 flex flex-col justify-between h-full text-start basicBacground lg:pb-2">
                <CardContent className="flex flex-col h-full justify-around">
                    <Box>
                        <Typography color="text.secondary" className="pb-3">
                            Akciós a legjobb orsó
                        </Typography>
                        <Typography variant="h3" color="text.primary">
                            SHIMANNO 14000XT
                        </Typography>
                    </Box>
                    <Typography color="text.secondary">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button className="w-2/4 butttonClass2">
                        {buttonText}
                    </Button>
                </CardActions>
            </Box>
        </Card>

    )
}
