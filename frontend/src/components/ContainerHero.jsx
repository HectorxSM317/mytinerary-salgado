import React from "react";

export default function ContainerHero() {
  return (
    <div 
    data-aos="flip-left"
    data-aos-duration="1500"
    className="flex flex-wrap bg-gray-400/25 rounded-2xl w-10/12 lg:w-5/12 mt-4 mb-10">
      <div className="border-x-2 rounded-2xl w-full flex justify-center items-center shadow-lg shadow-slate-500">
        <p className= "text-xl text-center font-mono italic font-semibold text-black ">“If you think adventure is dangerous try routine. It is lethal.” Paulo Coelho</p>
      </div>
    </div>
  );
}
