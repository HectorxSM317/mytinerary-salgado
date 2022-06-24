import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import itineraryAction from "../redux/actions/itineraryAction";
import Itinerary from "./Itinerary";
import NotItinerary from "./NotItinerary";

export default function Itineraries({id}) {

const dispatch = useDispatch()

useEffect(() =>{
    dispatch(itineraryAction.getTinFromCity(id))
},[])

const itineraries = useSelector(store => store.itineraryReducer.itineraries)
console.log(itineraries)

  return (
    <div className="flex flex-col gap-5 pb-5 w-full items-center">

      {itineraries?.length > 0 ? 
      itineraries.map(iti => (
        <Itinerary
          itineraryName={iti.itineraryName}
          userName={iti.userName}
          userPhoto={iti.userPhoto}
          price={iti.price}
          time={iti.time}
          tags={iti.tags}
          likes={iti.likes}
          key={iti._id}
        />
      )) : <NotItinerary />}
    </div>
  );
}
