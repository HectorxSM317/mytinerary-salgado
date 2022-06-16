import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CardDetail from '../components/CardDetail'

// import { cities } from '../data'


export default function Detail() {
  const [city, setCity] = useState();

  const {id} = useParams()

useEffect(() => {
  axios.get(`http://localhost:4000/api/cities/${id}`)
  .then(resp => setCity(resp.data.response)
  )},[id])


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
    <div className="bodyDetail flex flex-grow justify-center bg-gradient-to-br from-black via-zinc-900 to-black py-5">
        
        <CardDetail city={city}  />
      
       
        </div>
  )
}
