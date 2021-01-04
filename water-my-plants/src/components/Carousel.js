import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styled from 'styled-components'
import plantOne from './plant-one.jpeg'
import plantTwo from './plant-two.jpeg'
import plantThree from './plant-three.jpeg'
import plantFour from './plant-four.jpeg'

const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: cover;
`

const DaCarousel = () => (
    <div>
        <Carousel>
            <div>
                <Image src={plantOne} />
            </div>
            <div>
                <Image src={plantTwo} />
            </div>
            <div>
                <Image src={plantThree} />
            </div>
            <div>
                <Image src={plantFour} />
            </div>
        </Carousel>
    </div>
)

export default DaCarousel