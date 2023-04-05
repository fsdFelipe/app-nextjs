import React from 'react'
import { SliderData } from './SliderData';
import Image from 'next/image'

const Slider = ({slides}) => {
  return (
    <div id='gallery'>
        <h1>Gallery</h1>
        <div>
        {SliderData.map((slide, index) => {
        return(
            <div>
            <Image src={slide.image} alt='/' width='1440' height='600' object-fit='cover' />
            </div>
        ) 
    })}
        </div>
    </div>
  )
}

export default Slider