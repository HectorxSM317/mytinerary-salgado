/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { IconContext } from "react-icons";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import {Link as LinkRouter} from 'react-router-dom'



const navigation = [
  { name: "Home", to:'/', current: false },
  { name: "Cities", to:'/cities', current: false },
  { name: "Sing Up", to:'a', current: false },
  { name: "Sing In", to:'a', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer() {
  return (
    <Disclosure as="footer" className="bg-black h-44">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-full">
            <div className="relative flex items-center justify-between  h-full">
              <div className="flex-1 flex items-center justify-around sm:justify-around">
                <div className="flex flex-col border-r-4 pr-5 sm:pr-">
                  {navigation.map((item) => (
                    <LinkRouter
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-white text-base font-black underline hover:bg-amber-400 hover:text-black",
                        "px-1 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </LinkRouter>
                  ))}
                </div>
                <div>
                    <h1 className="text-white text-center fontLogo text-5xl mr-5 md:mr-0 font-bold sm:mb-3 ">
                      My T
                    </h1>
                    <p className="text-white hidden sm:block ">&#169;Copyright-All rights reserved - Héctor Salgado Medina</p>
                </div>
                <IconContext.Provider value={{color:'white', size:'1.5rem'}}>
                    <div className="flex flex-col sm:flex-row md: gap-2">
                        <a target="_blank" href="https://es-la.facebook.com/"><BsFacebook /></a>
                        <a target="_blank" href="https://www.instagram.com/"><BsInstagram /></a>
                        <a target="_blank" href="https://www.whatsapp.com/?lang=es"><BsWhatsapp /></a>
                        <a target="_blank" href="https://cl.linkedin.com/"><BsLinkedin /></a>
                    </div>
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
