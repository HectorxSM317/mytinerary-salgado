import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
// eslint-disable-next-line
import {Link, Link as LinkRouter} from 'react-router-dom'
import { RiAccountPinCircleLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import usersAction from '../redux/actions/usersAction';
import toast from "react-hot-toast";
import { FcSettings } from "react-icons/fc";
import { FaCity } from "react-icons/fa";
import { AiFillHome, AiFillApi } from "react-icons/ai";


const navigation = [
  { name: 'Home', to:'/', current: false },
  { name: 'Cities', to:'/cities', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const dispatch = useDispatch()

  let user = useSelector(store => store.userReducer.user)
  console.log(user)




  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="w-full absolute pt-2">
            <div className="relative flex items-center h-20 px-5">
              <div className="inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
                  

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <LinkRouter to='/' className='text-white mr-10 sm:mr-0 hidden md:block flex-shrink fontLogo sm:text-5xl font-bold self-start'>My T</LinkRouter>
                <div className="hidden sm:block">
                  <div className="flex space-x-4 justify-center items-center">
                    {navigation.map((item) => (
                      <LinkRouter
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-white text-base font-black underline hover:bg-amber-400 hover:text-black transition duration-500 ',
                          'px-1 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name === "Home" ?<div className='flex items-center gap-1 text-2xl'> <AiFillHome /> {item.name}</div> : <div className='flex items-center gap-1 text-2xl'> <FaCity /> {item.name} </div>}
                        
                      </LinkRouter>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-5 sm:right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative z-10">
                  <div>
                    <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      {!user ?
                       <RiAccountPinCircleLine style={{width:'30px', height:'30px', color: 'white'}}/>
                       :
                        <div className='flex items-center gap-2 sm:pl-2'>
                          <p className='text-white text-2xl hidden sm:block'>{user.userData.firstName}</p>
                          <img className='w-11 h-11 sm:w-14 sm:h-14 rounded-full object-fit' src={user.userData.photoUser ? user.userData.photoUser : null} alt='user'/>
                          </div>}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    {!user ? 
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <LinkRouter
                            to={'/signin'}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign In
                          </LinkRouter>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <LinkRouter
                            to={'/signup'}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign Up
                          </LinkRouter>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                    :
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item className="flex items-center gap-2 ml-3">
                        {({ active }) => (
                          <LinkRouter
                            to={'/settings'}
                          
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                           <FcSettings /> Setting  
                          </LinkRouter>
                        )}
                      </Menu.Item>
                      <Menu.Item className="flex items-center gap-2 ml-3">
                        {({ active }) => (
                          <LinkRouter
                            onClick={() => {dispatch(usersAction.logoutUser())
                              toast('See you later 😊')
                            }
                          }
                            to={'/'}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                           <AiFillApi /> Sign Out
                          </LinkRouter>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                    }
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden absolute left-1 top-16">
            <div className="w-fit flex flex-col gap-3 z-10">
              {navigation.map((item) => (
                <LinkRouter
                  key={item.name}
                  as="LinkRouter"
                  to={item.to}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-black italic border-2 bg-amber-400 border-zinc-600 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-1 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </LinkRouter>
              ))}
            </div>
          </Disclosure.Panel>
          
        </>
      )}
    </Disclosure>
  )
}
