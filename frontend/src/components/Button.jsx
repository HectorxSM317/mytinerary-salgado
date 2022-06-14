import React from 'react'
import '../styles/App.css'
import {Link as LinkRouter} from 'react-router-dom'

export default function Button() {
  return (
    
    <div data-aos="fade-down-right" className='flex'>
      <LinkRouter to='/cities'  className='buttonFont bg-amber-500/75 text-2xl sm:text-4xl p-2 lg:p-0 text-center hover:bg-amber-400  rounded-full w-36 sm:w-40  sm:h-26 border-slate-900 border-4 animate-bounce leading-none shadow-2xl shadow-black'>Less Work, More travel</LinkRouter>
    </div>
    
  )
}
