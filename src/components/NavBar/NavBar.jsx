/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import {Link, Link as LinkRouter} from 'react-router-dom'

const navigation = [
  { name: 'Home', to:'/', current: false },
  { name: 'Cities', to:'/cities', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
                <LinkRouter to='/' className='text-white fontLogo text-3xl font-bold self-start'>My T</LinkRouter>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
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
                        {item.name}
                      </LinkRouter>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-offset-gray-800 hover:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-full rounded-full"
                        src="https://www.pngfind.com/pngs/m/292-2925035_login-register-circle-hd-png-download.png"
                        alt="AvatarLogout"
                      />
                    </Menu.Button>
                  </div>
                  </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <LinkRouter
                  key={item.name}
                  as="LinkRouter"
                  to={item.to}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
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
