import React from "react";
import Button from "./Button";
import ContainerHero from "./ContainerHero";
import Mytynerary from "./MyTinerary";
import '../styles/App.css'
import hero from '../assets/hero.mp4'



export default function Hero() {
  return (
    <div className="flex h-screen flex-col bgImageMain border-b-8">
      <Mytynerary />
      <div className="flex flex-col justify-center items-center  ">
        <div className="flex justify-center lg:mb-10">
          <Button />
        </div>
        <ContainerHero />
      </div>
    </div>
  );
}
