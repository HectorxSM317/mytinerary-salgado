import { IconContext } from "react-icons";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link as LinkRouter } from "react-router-dom";
import { FaCity } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { GoSignIn } from "react-icons/go";
import { GiArchiveRegister } from "react-icons/gi";

import "../styles/App.css";


const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "Cities", to: "/cities", current: false },
  { name: "Sign Up", to: "/signup", current: false },
  { name: "Sign In", to: "/signin", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer() {
  return (
    
      <div as='footer' className="footer flex items-center bg-black justify-around sm:justify-around py-5 ">
        <div className="flex flex-col border-r-4 pr-5">
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
              {item.name === "Home" ?<div className='flex items-center gap-1'> <AiFillHome /> {item.name}</div> :
               item.name === "Cities" ? <div className='flex items-center gap-1'> <FaCity /> {item.name} </div> :
                item.name === "Sign In" ? <div className='flex items-center gap-1'><GoSignIn /><p>{item.name}</p></div>:
                 <div className='flex items-center gap-1'><GiArchiveRegister /><p>{item.name}</p></div> }
             
            </LinkRouter>
          ))}
        </div>
        <div>
          <h1 className="text-white text-center fontLogo text-5xl mr-5 md:mr-0 font-bold sm:mb-3 ">
            My T
          </h1>
          <p className="text-white hidden sm:block ">
            &#169;Copyright-All rights reserved
          </p>
        </div>
        <IconContext.Provider value={{ color: "white", size: "2rem"}}>
            <div className="flex flex-col sm:flex-row">
              <div className="mb-2 sm:mb-0 sm:mr-2 ">
                <a target="_blank" rel="noopener noreferrer" href="https://es-la.facebook.com/" >
                  <BsFacebook />
                </a>
              </div>
              <div className="mb-2 sm:mb-0 sm:mr-2">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
                  <BsInstagram />
                </a>
              </div>
              <div className="mb-2 sm:mb-0 sm:mr-2">
                <a target="_blank" rel="noopener noreferrer" href="https://www.whatsapp.com/?lang=es">
                  <BsWhatsapp />
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://cl.linkedin.com/">
                  <BsLinkedin />
                </a>
              </div>
            </div>
        </IconContext.Provider>
      </div>
    
  );
}
