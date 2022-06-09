// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { cities } from "../../data";
import { Autoplay, Pagination, Grid, Navigation} from "swiper";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/css/autoplay"
import "./Carousel.css";



// import required modules

export default function Carousel() {
  return (
    <div className="border-t-8 bg-black flex flex-col items-center justify-center h-screen">
      <h2 className="text-white textPopular text-3xl md:text-4xl my-3 lg:text-5xl">Popular MyTineraries</h2>
      <Swiper
        grid={{
          rows: 2,
          fill: 'row'
        }}
        slidesPerView={2}
        slidesPerGroup ={2}
        spaceBetween= {10}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
        autoHeight={false}
        navigation= {true}
        pagination={{
          clickable: true,
          
        }}
        modules={[Autoplay, Pagination, Grid, Navigation]}
        className="mySwiper h-full"
      >
        {cities.map((city, index) => (
          <SwiperSlide
            className="rounded-3xl"
            style={{
              backgroundImage: `url('${city.img}')`,
          
            }}
            key={index}
          >
            <h3 className="bg-slate-900/50 text-teal-100 lg:text-2xl border-y-2 w-full py-2 font-mono font-bold tracking-wide">{city.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
