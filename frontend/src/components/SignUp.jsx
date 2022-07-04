import React from "react";
import { useDispatch } from "react-redux";
import usersAction from "../redux/actions/usersAction";
import { Link, Link as LinkRouter } from "react-router-dom";
import GoogleSignUp from "./GoogleSignUp";
import {useNavigate} from 'react-router-dom'
// import {ShowToast} from "./ShowToast";
import toast from "react-hot-toast";
import { useState } from "react";
import { set } from "mongoose";

export default function SingUp({ countries }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirm, setPasswordConfirm] = useState()
  const [photoUser, setPhotoUser] = useState()
  const [country, setCountry] = useState()

  async function handleSubmit (event) {
    event.preventDefault();
    if(checkpassword()){
      const userData = {
        firstName: firstName,
        lastName: lastName,
        email:email,
        password:password,
        photoUser: photoUser,
        country: country,
        from: "signUpForm",
      };
      
      let res = await dispatch(usersAction.signUpUser(userData));
      if(res.data.success){
        toast.success(res.data.message)
        
          navigate('/', {replace: false})
        
      }else{
        res.data.message.map(msg =>{
          return toast.error(msg.message)
      })}
      
    }

    
  };

  function checkpassword(){
    if(password === passwordConfirm){
      return true
    }else{
      return false
    }
  }

  return (
    <div className="w-11/12 flex flex-col md:flex-row items-center my-5">
      <div className="w-11/12 sm:w-9/12 lg:w-1/2 rounded-xl md:rounded-none md:rounded-l-xl px-2 my-10">
        <div className="flex flex-col my-3 justify-center items-center">
          <p className="my-5 text-5xl text-center text-white textPopular">Already have an account?</p>
          <LinkRouter
            to={"/signin"}
            href="#"
            className=" bg-amber-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white text-xl shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
          >
            Sign in
          </LinkRouter>
        </div>
        <div className="mt-50 flex text-white text-3xl justify-center textPopular">
            <p>Or register</p>
        </div>

        <div className="my-4 flex h-40 justify-center">
            <select
            onChange={e => setCountry(e.target.value)}
              
              type="Select"
              name="country"
              placeholder="Select Country"
              className="mt-1 block w-10/12 bg-slate-300/50 border-none h-12 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
            >
              
                <option  value="">Select your country</option>
                
                {countries?.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
              ))}
              
            </select>
          </div>
          {country ? <div className="flex my-5 justify-center w-full">
          <GoogleSignUp action='signUp' country={country}/>
        </div> : <div></div> }

        
      </div>


      {country ? 
      <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-1/2">
      <label
        htmlFor=""
        className="block mt-3 text-5xl text-white text-center font-semibold textPopular"
      >
        Register
      </label>
      <form onSubmit={handleSubmit} className="mt-10">
        <div>
          <input
            onKeyUp={e => setFirstName(e.target.value)}
            type="text"
            name="name"
            placeholder="Name"
            className="mt-1 block w-full  bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
          />
        </div>
        <div className="mt-2">
          <input
            onKeyUp={e => setLastName(e.target.value)}
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
          />
        </div>
        <div className="mt-2">
          <input
            onKeyUp={e => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="email"
            className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
          />
        </div>
        <div className="mt-2">
          <input
            onKeyUp={e => {
              setPassword(e.target.value)
              setPasswordConfirm(e.target.value)
            }
            } 
            type="password"
            name="pass"
            placeholder="password"
            className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
          />
          {checkpassword() ? <p></p> : <p className="text-red-700">* los password no coinciden</p>}
        </div>
        <div className="mt-2">
          <input
          
            onKeyUp={e => setPasswordConfirm(e.target.value)}
            type="password"
            name="passwordConfirm"
            placeholder="password Confirm"
            className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
          />
          {checkpassword() ? <p></p> : <p className="text-red-700">* los password no coinciden</p>}
        </div>
        <div className="mt-2">
          <input
            onKeyUp={e => setPhotoUser(e.target.value)}
            type="text"
            name="img"
            placeholder="Image"
            className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
          />
        </div>
        <div className="my-2 flex justify-center">
          <button
            type="submit"
            className="bg-amber-500 w-1/2 py-3 mt-5 rounded-xl text-white text-xl shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
          >
            Register
          </button>
        </div>
      </form>
    </div> : <div></div>
    }

      
    </div>
  );
}
