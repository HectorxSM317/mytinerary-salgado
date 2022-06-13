import React from 'react'
import Carousel from '../components/Caroulsel'
import Hero from '../components/Hero'
import { useEffect } from 'react'

export default function Index() {

  useEffect(() =>{
    setTimeout(() =>{
      window.scrollTo(0, 0)
    }, 200)
  }, [])

  
  return (
    <div className='body'>
      
      <Hero />
      <Carousel/>
      
    </div>
  )
}
