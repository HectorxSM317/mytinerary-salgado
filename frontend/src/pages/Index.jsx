import React from "react";
import Carousel from "../components/Caroulsel";
import { useEffect } from "react";
import MyTinerary from "../components/MyTinerary";
import Button from "../components/Button";
import ContainerHero from "../components/ContainerHero";

export default function Index() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  }, []);

  return (
    <div className="body">
      <div className="flex h-8/ flex-col bgImageMain border-b-8 sm:pt-10">
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
