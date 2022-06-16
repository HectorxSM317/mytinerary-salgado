import React from "react";

export default function CardDetail({ city }) {
  console.log(city)
  
  
  return (
    
      <div key={city._id} className="w-11/12 flex flex-col items-center sm:p-4">
      <div className="
      transition 
      duration-500 
      ease-in-out 
      transform 
      hover:origin-center  
      hover:scale-110
      flex flex-row lg:w-9/12 sm:my-10 rounded-3xl shadow-2xl justify-center flex-wrap shadow-slate-200/25 p-5">
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

      <div className="w-full flex justify-center md:mt-10 xl:mt-14 lg:justify-center flex-wrap">
        <div
          className="
          transition 
		      duration-500 
		      ease-in-out 
		      transform 
		      hover:origin-center 
		      hover:rotate-3 
		      hover:scale-100
		      w-full sm:w-3/4 md:w-3/6 md lg:w-1/3 justify-center hidden sm:flex"
        >
          <img
            className="object-cover rounded-3xl lg:w-5/6 shadow-2xl shadow-slate-200/25"
            src={city.detailImg2}
            alt={city.name}
          />
        </div>

        <div className=" md:w-2/6 flex justify-center ms:justify-end my-3 sm:my-0 flex-grow items-center text-center sm:text-left">
          <p className="text-white text-xl sm:w-5/6">
            {city.description}
          </p>
        </div>

        <div className="
        transition 
		      duration-500 
		      ease-in-out 
		      transform 
		      hover:origin-center 
		      hover:-rotate-3
		      hover:scale-100
        sm:w-2/3 lg:w-1/3 lg:h-full flex mt-3 justify-center">
          <img
            className="object-cover rounded-3xl lg:w-5/6 shadow-2xl shadow-slate-200/25"
            src={city.detailImg3}
            alt={city.name}
          />
        </div>
      </div>
    </div>
     
  );
}
