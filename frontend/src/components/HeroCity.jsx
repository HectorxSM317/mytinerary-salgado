import React from 'react'
import timelaps from '../assets/timelaps.mp4'

export default function HeroCity() {
  return (
    <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="flex border-4 sm:flex-row h-96 w-11/12 rounded-3xl mt-8"
      >
        <div className="h-full">
            <video className='h-full rounded-3xl' loop autoPlay src={timelaps}></video>
        </div>
        
      </div>
  )
}
