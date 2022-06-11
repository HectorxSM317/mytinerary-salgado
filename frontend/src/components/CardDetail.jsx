import React from "react";

export default function CardDetail({city}) {
    console.log(city)
  return (
    
      <div className="mx-3 my-2 flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-500/60">
        <img
          className="aspect-video w-96 rounded-t-2xl object-cover object-center"
          src={city[0].img}
          alt="imgcity"
        />
        <div className="p-4 flex flex-col items-center">
          <small className="text-blue-400 text-3xl"></small>
          <h1 className="text-2xl font-medium text-slate-600 pb-2">
            {city[0].name}
          </h1>
          <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
            Dodge is an American brand of automobiles and a division of
            Stellantis, based in Auburn Hills, Michigan..
          </p>
        </div>
      </div>
    
  );
}
