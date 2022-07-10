import React from 'react'
import timelaps from '../assets/timelaps.mp4'
import city from '../assets/city.mp4'

export default function HeroCity() {
  return (
    <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="flex sm:flex-row h-96 items-center rounded-3xl mt-14 sm:mt-20 shadow-xl shadow-slate-200/50"
      >
        <div className="h-full sm:hidden lg:block lg:border-r-4 md:pr-3">
            <video className='h-full rounded-3xl md:rounded-r-none ' loop autoPlay src={timelaps}></video>
        </div>
        <div className='h-full  hidden p-5 md:p-0 sm:block lg:ml-3'>
          <video className='h-full rounded-3xl lg:rounded-l-none' loop autoPlay src={city}></video>
        </div>
        
      </div>
  )
}
