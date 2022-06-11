import React from "react";
import Button from "./Button";
import ContainerHero from "./ContainerHero";
import Mytynerary from "./MyTinerary";
import '../styles/App.css'



export default function Hero() {
  return (
    <div className="flex h-screen flex-col bg-right bgImageMain border-b-8">
      <Mytynerary />
      <div className="h-screen flex flex-col justify-center items-center ">
        <div className="flex justify-center">
          <Button />
        </div>
        <ContainerHero />>
      </div>
    </div>
  );
}
