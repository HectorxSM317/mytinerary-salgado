import React from "react";


export default function CardDetail({ city }) {
  console.log(city);

  return (
    <div className="flex flex-col items-center">
      <div key={city._id} className="w-11/12 flex flex-col items-center sm:p-4">
        <div
          className="
      transition 
      duration-500 
      ease-in-out 
      transform 
      hover:origin-center  
      hover:scale-110
      flex flex-row lg:w-9/12 sm:my-10 rounded-3xl shadow-2xl justify-center flex-wrap shadow-slate-200/25 p-5"
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              className="object-cover sm:w-8/12 rounded-3xl"
              src={city.detailImg1}
              alt={city.name}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-white text-4xl ">{city.name}</h2>
            <h3 className="text-white text-3xl pl-4">{city.country}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
