import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CardDetail from '../components/CardDetail'
import {Link as LinkRouter} from 'react-router-dom'

import { useSelector, useDispatch } from "react-redux";
import citiesActions from '../redux/actions/citiesActions'
import Itinerary from '../components/Itinerary'



export default function Detail() {
  const {id} = useParams();
  const dispatch = useDispatch()
 
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  }, []);


useEffect(() => {
  dispatch(citiesActions.getOneCity(id))
  
  },[])

  const city = useSelector(store => store.citiesReducer.oneCity)
  console.log(city)

  if(!city){
    return (<div className=" shadow rounded-md p-4 min-h-screen flex items-center justify-center max-w-sm w-full mx-auto">
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-slate-700 h-10 w-10"></div>
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-slate-700 rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  </div>)
    
  }  

  return (
    <div className='flex flex-col items-center bg-gradient-to-br from-black via-zinc-900 to-black'>

    <div className="bodyDetail flex justify-center py-5">
    <CardDetail city={city}  />
    </div>

    <div className='flex flex-col gap-5 pb-5 w-full items-center'>
      {city.itinerary?.map(iti => <Itinerary
        itineraryName={iti.itineraryName}
        userName={iti.userName}
        userPhoto={iti.userPhoto}
        price={iti.price}
        time={iti.time}
        tags={iti.tags}
        likes={iti.likes}
        city={city}
        key={iti._id}/>)}
    </div>

    <div className="flex mt-5">
          <LinkRouter
            to="/cities"
            className="buttonFont text-white text-2xl sm:text-4xl p-2 lg:p-0 text-center  rounded-full w-36 sm:w-40  sm:h-26 border-white border-4"
          >
            Back
          </LinkRouter>
        </div>
    </div>
  )
}
