import React from "react";
import '../styles/App.css'

export default function Mytynerary() {
  return (
    <div className="flex h-4/5 flex-col sm-flex-row items-center justify-center mt-3 ">
      <div className=" items-center justify-center">
      </div>
      <div >
        <p className="text-my text-7xl md:text-8xl lg:text-9xl sm text-white text-center  font-bold tracking-widest">
          My
        </p>
        <p className="text-tinerary text-5xl md:text-6xl lg:text-7xl text-white text-center font-bold tracking-widest -translate-y-2">
          Tinerary
        </p>
        <p className="slogan tracking-widest  text-white underline underline-offset-4 text-center">
          Find your perfect trip, designed by insiders who know and love their
          cities!"
        </p>
      </div>
    </div>
  );
}
