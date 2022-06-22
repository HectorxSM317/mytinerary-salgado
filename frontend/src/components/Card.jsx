import React from "react";
import { Link as LinkRouter } from "react-router-dom";

export default function Card({ city }) {
  return (
    <>
      <div
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
        className="relative group w-full sm:w-10/12 md:w-2/5 h-80 rounded-md border-4 border-neutral-800 overflow-hidden bg-black m-2"
      >
        <img
          className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
          src={city.detailImg1}
          alt="imagecity"
        />
        {/* <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div> */}
        <div className="flex justify-center  absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
          <div className="absolute w-full flex place-content-center">
            <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-6 w-full bg-slate-800/50m, border-y-4">
              {city.name}
            </p>
          </div>
          <div className="absolute w-full md:w-11/12 flex place-content-center mt-20">
            <p className="font-sans text-center w-full text-white">
              {city.description}
            </p>
          </div>
          <LinkRouter
            to={`/detail/${city._id}`}
            className="absolute center bottom-4 text-center pt-2  bg-white text-black font-bold rounded-lg h-10 w-32"
          >
            View more
          </LinkRouter>
        </div>
      </div>
    </>
  );
}
