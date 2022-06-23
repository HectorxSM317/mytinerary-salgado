import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import itineraryAction from '../redux/actions/itineraryAction'
import {useEffect} from 'react'



export default function Itinerary({itineraryName, userName, userPhoto, price, time, tags, likes, city}) {



  return (
    <div className='flex flex-col w-11/12 my-10'>
      <div className='flex flex-col  h-96 bg-slate-300 rounded-t-xl'> 

          <div className='flex h-1/2 rounded-t-xl w-full'>

            <div className='flex flex-col absolute translate-y-40 pl-3 items-center justify-center'>
              <div className=' rounded-full w-20 h-20'>
                <img className='w-full h-full rounded-full' src={userPhoto} alt={userName} />
              </div>
              <div className='flex justify-center items-center'>
                <p className='align-middle text-sm font-bold'>{userName}</p>
              </div>
            </div>

            <div className='absolute -translate-y-6 -translate-x-2 bg-black p-2 rounded-xl'>
              <h2 className='font-bold text-lg sm:text-3xl text-white'>{itineraryName}</h2>
            </div>
            <img className='w-full bg-center' src={city.detailImg2} alt="imgcity" />

          </div>


          <div className='flex flex-col items-center gap-3 justify-center pt-20'>
            
            <div className='flex gap-5'>
              <div className='flex flex-wrap'>
                
                <div className='price'>Price: {price}billetes</div>
              </div>
              <div className='time'>Time: {time}</div>
              <div className=''>{likes}likes</div>
            </div>

            <div className='flex flex-wrap gap-2 '>
              {tags.map(tag => {
                return <p className='hover:underline' key={tag}>{tag}</p>
              })}
            </div>
          </div>
      </div>
      
      <main className="border-4">
      <section className="shadow row">
          <div className="tabs">
              <div className="border-b tab">
                  <div className="border-l-2 border-transparent relative">
                      <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1"/>
                      <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck1">
                          <span className="text-grey-darkest font-thin text-xl">
                              Activities
                          </span>
                          <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
      
                              <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <polyline points="6 9 12 15 18 9">
                                  </polyline>
                              </svg>
                          </div>
                      </header>
                      <div className="tab-content">
                          <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                              <ul className="pl-4">
                                  <li className="pb-2">
                                      consectetur adipiscing elit
                                  </li>
                                  <li className="pb-2">
                                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                  </li>
                                  <li className="pb-2">
                                      Viverra orci sagittis eu volutpat odio facilisis mauris
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      </main>
    </div>
  )
}
