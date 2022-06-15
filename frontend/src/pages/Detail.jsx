import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CardDetail from '../components/CardDetail'

// import { cities } from '../data'


export default function Detail() {
  const [arrayFilter, setArrayFilter] = useState([]);

  const {id} = useParams()

useEffect(() => {
  axios.get('http://localhost:4000/api/cities')
  .then(resp => setArrayFilter(resp.data.response.cities))
},[])
  console.log(arrayFilter)
    console.log(id)
  
  let asdf = arrayFilter.filter(e => e._id === id)
  


  // if(asd){
  //   return console.log(asd)
    
  // }  

  return (
    <div className="bodyDetail flex justify-center bg-gradient-to-br from-black via-zinc-900 to-black py-5">
        
        <CardDetail city={asdf}  />
      
       
        </div>
  )
}
