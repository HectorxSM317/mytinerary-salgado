import React from 'react'
import '../styles/App.css'
import {Link as LinkRouter} from 'react-router-dom'

export default function Button() {
  return (
    
    <LinkRouter to='/cities' className='buttonFont bg-amber-500/75 lg:bg-amber-500/50 text-4xl p-2 text-center hover:bg-amber-400  rounded-full w-40 h-26 border-slate-900 border-4 animate-bounce leading-none shadow-2xl shadow-black'>Less Work, More travel</LinkRouter>
    
  )
}
