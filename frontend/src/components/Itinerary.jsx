import React from 'react'

export default function Itinerary({city}) {
  console.log(city)
  return (
    <div className='flex flex-col w-4/6 h-96 bg-slate-300 rounded-xl'>
        <div className='flex h-1/2 rounded-t-xl bg-orange-300 w-full'>
          <div className='flex flex-col w-32 items-center justify-center'>
            <div className='rounded-full bg-black w-5/6 h-1/2'>
              
            </div>
            <div className='flex justify-center items-center'>
              <p className='align-middle'>name</p>
            </div>
          </div>
          <div className='flex-1 flex self-center justify-center'>
            <h2 className='text-center text-4xl'>Name City</h2>
          </div>
        </div>

        <div className='flex flex-col items-center gap-3 mt-4'>
          <div className='hashtag'>Hashtag Hash tag</div>
          <div className='flex gap-5'>
            <div className='price'>Price $$$$$</div>
            <div className='time'>Time: 1h 30m</div>
            <div className='likes'>Likes</div>
          </div>
        </div>
        
    </div>
  )
}
