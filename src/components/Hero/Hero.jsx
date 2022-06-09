import React from "react";
import Button from "../Button/Button";
import ContainerHero from "../ContainerHero/ContainerHero";
import Mytynerary from "../MyTinerary/MyTinerary";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="flex h-screen flex-col bg-right bgImageMain border-b-8">
      <Mytynerary />
      <div className="h-screen flex flex-col justify-center items-center ">
        <div className="flex justify-center">
          <Button />
        </div>
        <ContainerHero />
      </div>
    </div>
  );
}
