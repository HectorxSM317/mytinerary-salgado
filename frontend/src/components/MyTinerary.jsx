import React from "react";
import '../styles/App.css'

export default function MyTinerary() {
  return (
    <div
    data-aos="fade-right"
    data-aos-duration="2500"
     className="flex h-60 md:h-2/3 lg:h-2/4 flex-col sm-flex-row items-center justify-center my-4">
      
        <p className="text-my text-8xl sm:text-9xl sm:mt-5 text-white text-center font-bold tracking-widest">
          My
        </p>
        <p className="text-tinerary text-5xl sm:text-7xl text-white text-center font-bold tracking-widest">
          Tinerary
        </p>
        <p className="slogan w-10/12 sm:w-3/4 lg:w-1/2  sm:text-2xl tracking-widest text-white underline underline-offset-4 text-center my-2">
          Find your perfect trip, designed by insiders who know and love their
          cities!"
        </p>
      </div>
  
  );
}
