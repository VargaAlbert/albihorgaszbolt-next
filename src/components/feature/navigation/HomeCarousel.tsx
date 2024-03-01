import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import homeCarousel from '@/utils/homeCarousel.json'
import HomeCarouselItem from '@/components/UI/navigation/HomeCarouselItem'

export default function HomeCarousel() {

    return (
        <Carousel autoPlay showThumbs={false}
            className='w-full'
        >
            {homeCarousel.map((item) => <HomeCarouselItem key={item.id} {...item} />)}
        </Carousel>
    )
}
