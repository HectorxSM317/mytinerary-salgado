import { IconContext } from "react-icons";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link as LinkRouter } from "react-router-dom";
import "../styles/App.css";

const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "Cities", to: "/cities", current: false },
  { name: "Sing Up", to: "a", current: false },
  { name: "Sing In", to: "a", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer() {
  return (
    
      <div as='footer' className="footer flex items-center bg-black justify-around sm:justify-around w-full">
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
              {item.name}
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
