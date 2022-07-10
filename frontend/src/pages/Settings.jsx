import React from 'react'
import { useState } from 'react';
import toast from "react-hot-toast";
import usersAction from '../redux/actions/usersAction';
import { useDispatch, useSelector } from 'react-redux';
import { BiSave } from "react-icons/bi";


export default function Settings({setReload}) {
  const dispatch = useDispatch()
  const userSetting = useSelector(store => store.userReducer.user)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [photoUser, setPhotoUser] = useState("") 
 
  
  return (
    <div className='flex-grow flex pt-20 justify-center bgSettings'>
      
      <div className="flex flex-col items-center w-11/12 sm:w-10/12 md:w-8/12 lg:w-1/2 rounded-lg">
      <label className="block p-2 pb-4 mt-3 text-5xl bg-slate-600/50 rounded-2xl text- text-center font-semibold tracking-wide" >Settings</label>

      <div className="my-5 flex flex-col items-center justify-center gap-3">

        <form className="mt-2 flex justify-center gap-2">
          
          <input
            onKeyUp={e => setFirstName(e.target.value)
            } 
            type="text"
            name="name"
            placeholder="New name"
            className="w-full p-3  border-none bg-gray-100 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
          />
          {firstName?.length > 0 ?
          
          <button
            onClick={event => {
              event.preventDefault();
              const userData={
                firstName: firstName
              }
              dispatch(usersAction.modifyUser(userData, userSetting.userData.id));
              setFirstName("")
              toast.success('Succes')
              setReload(r => !r)
              
            }}
            className="bg-orange-500 p-2 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
          >
            <BiSave style={{fontSize:'25px'}}/>
          </button>
          : null
        
        }
        </form>

        <form className="mt-2 flex justify-center gap-2">
          <input
            onKeyUp={e => setLastName(e.target.value)}
            type="text"
            name="lastName"
            placeholder="New last name"
            className="w-full p-3  border-none bg-gray-100 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
          />
          {lastName?.length > 0 ?
          <button
            onClick={event => {
              event.preventDefault();
              const userData={
                lastName: lastName
              }
              dispatch(usersAction.modifyUser(userData, userSetting.userData.id));
              setLastName("")
              toast.success('Succes')
              setReload(r => !r)

            }}
            className="bg-orange-500 p-2 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
          >
            <BiSave style={{fontSize:'25px'}}/>
          </button> : null
          
        }
        </form>
      
        <form className="mt-2 flex justify-center gap-2">
          <input
            id='photouser'
            onKeyUp={e => setPhotoUser(e.target.value)}
            type="text"
            name="photoUser"
            placeholder="New url photo"
            className="w-full p-3  border-none bg-gray-100 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
          />
          {photoUser?.length > 0 ?
          <button
            onClick={event => {
              event.preventDefault();
              const userData={
                photoUser: photoUser
              }
              dispatch(usersAction.modifyUser(userData, userSetting.userData.id));
              setPhotoUser("")
              toast.success('Succes')
              setReload(r => !r)


            }}
            className="bg-orange-500 p-2 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
          >
            <BiSave style={{fontSize:'25px'}}/>
          </button> : null
          
        }
        </form>

        
      </div>



      </div>

    </div>
  )
}
