import React from 'react'
import { useState } from 'react';
import toast from "react-hot-toast";
import usersAction from '../redux/actions/usersAction';
import { useDispatch, useSelector } from 'react-redux';


export default function Settings() {
  const dispatch = useDispatch()
  const userSetting = useSelector(store => store.userReducer.user)

  const [firstName, setFirstName] = useState(userSetting.firstName)
  const [lastName, setLastName] = useState(userSetting.lastName)
  const [photoUser, setPhotoUser] = useState(userSetting.photoUser) 
  // const [country, setCountry] = useState()
 

  // const user = useSelector(store => store.userReducer.user)
  // console.log(user)

  function handleSubmit (event) {
    event.preventDefault();
    
 
    const userData = {
      firstName: firstName,
      lastName: lastName,
      photoUser: photoUser
      
      
      // country: country,
      
    };
    console.log(userData.firstName)
  dispatch(usersAction.modifyUser(userData));
    
  };




  return (
    <div className='flex-grow flex justify-center bgSettings'>
      
      <div className="flex flex-col items-center w-11/12 sm:w-10/12 md:w-8/12 lg:w-1/2 rounded-lg">
      <label
        htmlFor=""
        className="block mt-3 text-5xl  text-center font-semibold textPopular tracking-wide"
      >
        Settings
      </label>

      <form className="my-10 flex flex-col items-center justify-center gap-3">

        <div className="mt-2 flex justify-center gap-2">
          <label>Name
          <input
            
            onKeyUp={e => setFirstName(e.target.value)}
            type="text"
            name="name"
            placeholder="Name"
            className="w-1/2 p-3  border-none bg-gray-100 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
          />
          <button
            onClick={handleSubmit}
            className="bg-orange-500 p-2 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
          >
            Save change
          </button>
          </label>
        </div>

        <div className="mt-2 flex justify-center gap-2">
          <label>LastName
          <input
            id='lastName'
            onKeyUp={e => setLastName(e.target.value)}
            type="text"
            name="lastName"
            placeholder="LastName"
            className="w-1/2 p-3  border-none bg-gray-100 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
          />
          <button
            onClick={handleSubmit}
            className="bg-orange-500 p-2 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
          >
            Save change
          </button>
          </label>
        </div>
      
        {/* <div className="mt-2 flex justify-center gap-2">
          <label htmlFor="photoUser"></label>
          <input
            id='photouser'
            onKeyUp={e => setPhotoUser(e.target.value)}
            type="text"
            name="photoUser"
            placeholder="PhotoUser"
            className="w-1/2 p-3  border-none bg-gray-100 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
          />
          <button
            onClick={handleSubmit}
            className="bg-orange-500 p-2 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
          >
            Save change
          </button>
        </div> */}

        
      </form>



      </div>

    </div>
  )
}
