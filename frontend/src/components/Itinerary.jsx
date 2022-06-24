import React from 'react'




export default function Itinerary({itineraryName, userName, userPhoto, price, time, tags, likes}) {

let emoticon = '💵';
let emoticonLike = '💖'

  return (
    <div className='flex flex-col w-11/12 mt-10'>
      <div className='flex flex-col  h-96 bg-orange-200 rounded-t-xl border-x-4 border-t-4 border-amber-500'> 

          <div className='flex flex-grow flex-col items-center rounded-t-xl w-full'>

            <div className='bg-amber-500 w-3/4 p-2 -translate-y-5 rounded-xl'>
              <h2 className='font-bold text-lg sm:text-2xl md:text-3xl text-center text-white'>{itineraryName}</h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className=' rounded-full w-32 h-32 sm:w-40 sm:h-40'>
                <img className='w-full h-full rounded-full' src={userPhoto} alt={userName} />
              </div>
              <div className='flex justify-center items-center'>
                <p className='align-middle text-xl sm:text-2xl md:text-3xl font-bold'>{userName}</p>
              </div>
            </div>

          </div>

          <div className='flex flex-col items-center gap-3 justify-center mb-10 sm:mb-5'>
            
            <div className='flex gap-2 sm:gap5 md:gap-9'>
              <div className='flex w-24'>
                <p className='text-lg font-bold'>Price:</p>
                {emoticon.repeat(price)}
              </div>
              <div className='text-lg font-bold'>Time: {time}</div>
              <div className='text-xl'><button>{emoticonLike}{likes}</button></div>
            </div>

            <div className='flex flex-wrap gap-1 justify-center sm:gap-4 md:gap-10 mb-1'>
              {tags.map(tag => {
                return <p className='hover:underline' key={tag}>{tag}</p>
              })}
            </div>
          </div>
      </div>
      
      <main className="border-4 border-amber-500 rounded-b-2xl">
      <section className="shadow row">
          <div className="tabs">
              <div className=" tab">
                  <div className="relative">
                      <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1"/>
                      <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck1">
                          <span className="text-white font-bold text-center text-xl">
                              Activities
                          </span>
                          <div className="rounded-full border-2 border-grey w-9 h-9 flex items-center justify-center test">
      
                              <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <polyline points="6 9 12 15 18 9">
                                  </polyline>
                              </svg>
                          </div>
                      </header>
                      <div className="tab-content w-full">
                          <div className=" bg-white h-28 rounded-b-2xl">
                            
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
