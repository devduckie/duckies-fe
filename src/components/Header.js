import React from "react";
import { FaBars } from "react-icons/fa";
import Duck from "../assets/Duckie.png";
import PancakeSwap from "../assets/bunny-color.png"





export default function Navbar({ fixed }) {

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className=" bg-slate-900 sticky flex flex-wrap items-center justify-between px-2 py-3 mb-4 w-full top-0 left-0 right-0 z-50">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              <img src={Duck} alt="Duck" className="w-48" />
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent bg-transparent block lg:hidden outline-none focus:outline-none "
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center mx-7" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:text-yellow-300 "
                  href="#about"
                >
                  <span className="ml-2">About</span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:text-yellow-300"
                  href="#roadmap"
                >
                  <span className="ml-2">Roadmap</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:text-yellow-300"
                  href="#tokenomics"
                >
                  <span className="ml-2">Tokenomics</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:text-yellow-300"
                  href="#FAQs"
                >
                  <span className="ml-2">FAQs</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:text-yellow-300"
                  href="#socials"
                >
                  <span className="ml-2">Socials</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 ml-4 mr-2 flex items-center text-xs uppercase font-light leading-snug text-slate-900 hover:opacity-100 hover:text-yellow-300 border-white bg-white rounded-md"
                  href="https://pancakeswap.finance" target="_blank" rel="noreferrer noopener"
                >
                  <img src={PancakeSwap} alt="Pancakeswap" className="w-4" />
                  <span className="ml-2">Buy on pancakeswap</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
