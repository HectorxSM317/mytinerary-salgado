import React from "react";
import Carousel from "../components/Caroulsel";
import MyTinerary from "../components/MyTinerary";
import Button from "../components/Button";
import ContainerHero from "../components/ContainerHero";
import {useEffect} from 'react'



export default function Index() {
  
  
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  }, []);

  return (
    <div className="body">
      <div className="flex flex-col bgImageMain border-b-8 pt-20">
        <MyTinerary />
        <div className="flex flex-col justify-center items-center sm:mt-10 sm:pt-10 lg:pt-0">
          <Button />
          <ContainerHero />
        </div>
      </div>
      <Carousel />
    </div>
  );
}
