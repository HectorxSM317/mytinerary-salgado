import React from "react";
import { useDispatch } from "react-redux";
import { Link, Link as LinkRouter } from "react-router-dom";
import usersAction from "../redux/actions/usersAction";
import { useNavigate } from "react-router-dom";
import GoogleSignUp from "./GoogleSignUp";
import toast from "react-hot-toast";



export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(event)
    const logedUser = {
      email: event.target[0].value,
      password: event.target[1].value,
      from: "signUpForm",
    };
    // console.log(logedUser)
    let res = await dispatch(usersAction.signInUser(logedUser));
    

    if(res.data.success){
      navigate('/')
      toast.success(res.data.message)
    }else{
      toast.error(res.data.message)
      return logedUser
    }
  };

  return (
    <div className="w-11/12 bg sm:w-10/12 md:w-8/12 lg:w-1/2 rounded-3xl  px-3 py-4 my-5">
      <label
        htmlFor=""
        className="block mt-3 text-5xl text-center text-white textPopular"
      >
        Sign In
      </label>
      <form onSubmit={handleSubmit} className="mt-10">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Email address..."
            className="mt-1 block w-full bg-white border-none h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
          />
        </div>

        <div className="mt-2">
          <input
            type="password"
            name="lastName"
            placeholder="Password ..."
            className="mt-1 block w-full bg-white border-none h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
          />
        </div>

        <div className="mt-2 flex justify-center">
          <button
            type="submit"
            className="bg-amber-500 w-1/2 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
          >
            Sign in
          </button>
        </div>

        <div className="flex mt-7 items-center text-center">
          <hr className="border-gray-300 border-1 w-full rounded-md" />
          <label className="block text-5xl text-center text-white textPopular w-full ">
            With
          </label>
          <hr className="border-gray-300 border-1 w-full rounded-md" />
        </div>

        <div className="flex mt-7 justify-center w-full">
          
          <GoogleSignUp action='login' />
        </div>

        <div className="mt-7">
          <div className="flex justify-center items-center">
            <label className="mr-2 text-white">Don't have a account?</label>
            <LinkRouter
              to={"/signup"}
              href="#"
              className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
            >
              Sign Up
            </LinkRouter>
          </div>
        </div>
      </form>
    </div>
  );
}
