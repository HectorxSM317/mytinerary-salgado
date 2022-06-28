import React from "react";
import { useDispatch } from "react-redux";
import { Link, Link as LinkRouter } from "react-router-dom";
import usersAction from "../redux/actions/usersAction";

export default function SingIn() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event)
    const logedUser = {
      email: event.target[0].value,
      password: event.target[1].value,
      from: "signUpForm",
    };
    // console.log(logedUser)
    dispatch(usersAction.signInUser(logedUser));
  };

  return (
    <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-1/2 rounded-3xl  px-3 py-4 my-5 bg-gray-100 shadow-md">
      <label
        htmlFor=""
        className="block mt-3 text-sm text-gray-700 text-center font-semibold"
      >
        Sign In
      </label>
      <form onSubmit={handleSubmit} className="mt-10">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Email address..."
            className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
          />
          {/* {nameError && <p className='text-red-600'>* {nameError}</p> } */}
        </div>

        <div className="mt-2">
          <input
            type="password"
            name="lastName"
            placeholder="Password ..."
            className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"
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
          <label className="block font-medium text-sm text-gray-600 w-full">
            With
          </label>
          <hr className="border-gray-300 border-1 w-full rounded-md" />
        </div>

        <div className="flex mt-7 justify-center w-full">
          <button
            type="button"
            className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
          >
            Facebook
          </button>

          <button
            type="button"
            className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
          >
            Google
          </button>
        </div>

        <div className="mt-7">
          <div className="flex justify-center items-center">
            <label className="mr-2">Dont have a account?</label>
            <LinkRouter
              to={"/singup"}
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
