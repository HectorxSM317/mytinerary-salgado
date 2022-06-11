import React from 'react'
import { useParams } from 'react-router-dom'
import CardDetail from '../components/CardDetail'

import { cities } from '../data'


export default function Detail() {
    const {id} = useParams()
    

  return (
    <div className='bodyDetail'>
        
        <CardDetail city={cities.filter(city => city.id === Number(id))} />
        
       
        </div>
  )
}