import React from 'react'
import {useDispatch} from 'react-redux'
import usersAction from '../redux/actions/usersAction'
import {Link, Link as LinkRouter} from 'react-router-dom'



export default function SingUp({countries}) {
    const dispatch = useDispatch()


    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(event)
        const userData = {
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
            photoUser: event.target[5].value,
            country: event.target[6].value,
            from: "SignUpForm"
        }
console.log(userData)
dispatch(usersAction.singUpUser(userData))





        // if(!validarPassword()){
        //     return
        // }
        // if(!name){
        //     setNameError('name no puede estar vacio')
            
        // }
        // const res = await axios.post('http://localhost:4000/api/users', {name, lastName, mail, country, userPhoto})
     
    }

    // const validarPassword = () => {
    //     return  password === passwordConfirm
    // }



  return (

    
            <div className="w-full sm:w-10/12 md:w-8/12 lg:w-1/2 rounded-3xl  px-6 py-4 my-5 bg-gray-100 shadow-md">
                <label htmlFor="" className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                    Register
                </label>
                <form onSubmit={handleSubmit} className="mt-10">
                                    
                    <div>
                        <input type="text" name='name' placeholder="Name" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"/>
                        {/* {nameError && <p className='text-red-600'>* {nameError}</p> } */}
                    </div>

                    <div className='mt-2'>
                        <input type="text" name='lastName' placeholder="Last Name" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"/>
                    </div>
        
                    <div className='mt-2'>                
                        <input type="email" name='email' placeholder="email" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"/>                           
                    </div>

                    <div className='mt-2'>                
                        <input type="password" name='pass' placeholder="password" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"/>                           
                    </div>

                    <div className="mt-2">                
                        <input type="password" name='pass' placeholder="password confirm" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"/>                           
                    </div>

                    <div className="mt-2">                
                        <input type="text" name='img' placeholder="Image" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2"/>                           
                    </div>

                    <div className="mt-2">                
                        <select type="input" name='country' placeholder="Select Country" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2">
                        {countries?.map(country => <option  key={country.name} value={country.name}>{country.name}</option>)}

                        </select>   
                                             
                    </div>

                    <div className="mt-2">
                        <button type='submit' className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Register
                        </button>
                    </div>
        
                    <div className="flex mt-7 items-center text-center">
                        <hr className="border-gray-300 border-1 w-full rounded-md"/>
                        <label className="block font-medium text-sm text-gray-600 w-full">
                            Register
                        </label>
                        <hr className="border-gray-300 border-1 w-full rounded-md"/>
                    </div>
        
                    <div className="flex mt-7 justify-center w-full">
                        <button type='button' className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            
                            Facebook
                        </button>
        
                        <button type='button' className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            
                            Google
                        </button>
                    </div>
        
                    <div className="mt-7">
                        <div className="flex justify-center items-center">
                            <label className="mr-2" >Already have an account?</label>
                            <LinkRouter to={'/singin'} href="#" className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                Sign in
                            </LinkRouter>
                        </div>
                    </div>
                </form>
            </div>
        

  )
}
