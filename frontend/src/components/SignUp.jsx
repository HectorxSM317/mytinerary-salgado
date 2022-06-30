import React from "react";
import { useDispatch } from "react-redux";
import usersAction from "../redux/actions/usersAction";
import { Link, Link as LinkRouter } from "react-router-dom";
import GoogleSignUp from "./GoogleSignUp";
import {useNavigate} from 'react-router-dom'
const snackbar = require('snackbar');

export default function SingUp({ countries }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  async function handleSubmit (event) {
    event.preventDefault();
    

    const userData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
      photoUser: event.target[4].value,
      country: event.target[5].value,
      from: "SignUpForm",
    };
   
    let res = await dispatch(usersAction.signUpUser(userData));
    console.log(res.data.message)
    if(res.data.success){
      try{
        navigate('/', {replace: true})
      }catch(error){
        console.log(error)
      }
    }else{
      res.data.message.map(m => {
        console.log(m.message)
    return snackbar.show(m.message);
    
      })
      return userData
    }
    
    snackbar.show(res.data.message);
    
  };
  

  

  return (
    <div className="w-11/12 flex flex-col md:flex-row items-center my-10">
      <div className="w-11/12 sm:w-9/12 lg:w-1/2 rounded-xl md:rounded-none md:rounded-l-xl px-2 my-10 bg-gray-100 shadow-md">
        <div className="flex flex-col my-3 justify-center items-center">
          <p className="my-5 text-2xl">Already have an account?</p>
          <LinkRouter
            to={"/signin"}
            href="#"
            className=" bg-amber-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white text-xl shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
          >
            Sign in
          </LinkRouter>
        </div>
        <div className="mt-10 flex justify-center">
            <p>or register with</p>
        </div>
        <div className="flex my-5 justify-center w-full">
          <button
            type="button"
            className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
          >
            Facebook
          </button>
          <GoogleSignUp action='signUp'/>
        </div>
      </div>

      <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-1/2 rounded-lg px-2 bg-gray-100 shadow-md">
        <label
          htmlFor=""
          className="block mt-3 text-lg text-gray-700 text-center font-semibold"
        >
          Register
        </label>
        <form onSubmit={handleSubmit} className="mt-10">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="mt-1 block w-full bg-amber-500/25 border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
            />
          </div>
          <div className="mt-2">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="mt-1 block w-full bg-amber-500/25 border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
            />
          </div>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              placeholder="email"
              className="mt-1 block w-full bg-amber-500/25 border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
            />
          </div>
          <div className="mt-2">
            <input
              type="password"
              name="pass"
              placeholder="password"
              className="mt-1 block w-full bg-amber-500/25 border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
            />
          </div>
          <div className="mt-2">
            <input
              type="text"
              name="img"
              placeholder="Image"
              className="mt-1 block w-full bg-amber-500/25 border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
            />
          </div>
          <div className="mt-2">
            <select
              type="input"
              name="country"
              placeholder="Select Country"
              className="mt-1 block w-full bg-amber-500/25 border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
            >
              <option >country</option>
              {countries?.map((country) => (
                <option className="w-full" key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="my-2 flex justify-center">
            <button
              type="submit"
              className="bg-amber-500 w-1/2 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
