import React from 'react'
import SignIn from '../components/SignIn'
import { useEffect } from 'react'


export default function PageSignIn() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  }, []);

  return (
    <div className='flex-grow flex justify-center bg-black'>
        <SignIn />
    </div>
  )
}
