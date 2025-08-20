import logo from "../assets/logo.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false); // for sidebar
  const [showHeader, setShowHeader] = useState(false); // for mobile/tab click

  return (
    <>
         <div className="relative">
      <div
        className="group relative"
        onMouseEnter={() => setShowHeader(true)}
        onMouseLeave={() => setShowHeader(false)}
      >
        {/* HEADER */}
        <header
          className={`absolute top-0 left-0 w-full bg-white shadow-md z-20
            transition-transform duration-500 ease-in-out
            ${showHeader ? "translate-y-0" : "-translate-y-full"}
          `}
        >
          <div className="mx-6 my-4 grid grid-cols-12 gap-4 items-center">
            <img src={logo} alt="logo" className="lg:col-span-2 col-span-4 w-[100px]" />
            <div className="lg:col-span-10 col-span-8">
              <div className="flex items-center">
                <nav className="gap-x-4 lg:flex hidden justify-center items-center">
                  <a href="/" className="text-md mx-2 hover:text-gray-600">Home</a>
                  <a href="/products" className="text-md mx-2 hover:text-gray-600">Explore products</a>
                  <a href="/services" className="text-md mx-2 hover:text-gray-600">Services</a>
                  <a href="/about" className="text-md mx-2 hover:text-gray-600">Who we are</a>
                  <a href="/contact" className="text-md mx-2 hover:text-gray-600">Contact</a>
                </nav>

                <div className="flex items-center gap-4 ml-auto">
                  <a href="/search">
                    <img src="images/search.png" alt="search" className="w-5" />
                  </a>
                  <a href="/login">
                    <img src="images/user.png" alt="login" className="w-6 mx-2" />
                  </a>
                  <div className="bg-gray-600 px-3 py-1.5 flex flex-wrap rounded-4xl text-white hover:bg-black transition-all duration-300">
                    <img src="images/shopping-bag.png" alt="cart" className="w-5 h-5 mr-3" />
                    Shop
                  </div>
                  <button type="button" className="lg:hidden" onClick={() => setIsVisible(true)}>
                    <IoReorderThreeOutline className="text-3xl text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* TAB HANDLE (moves with header) */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 w-44 h-12 z-30 cursor-pointer
            transition-transform duration-500 ease-in-out
            ${showHeader ? "translate-y-[70px]" : "-translate-y-[20px]"}
          `}
          onClick={() => setShowHeader(!showHeader)} // mobile toggle
        >
          <svg viewBox="0 0 200 80" className="w-full h-full block" preserveAspectRatio="none">
            <path
              d="M0 0 H200 L170 64 A18 28 0 0 1 154 80 H46 A16 28 0 0 1 30 64 L0 0 Z"
              fill="white"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-3">
            <div className="h-[2px] w-[30px] bg-black/90"></div>
            <div className="h-[2px] w-[30px] bg-black/90 mt-1"></div>
          </div>
        </div>
      </div>
    </div>

      {/* Mobile Sidebar with animation */}
      <Transition show={isVisible}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50"
          onClose={() => setIsVisible(false)}
        >
          {/* Overlay */}
          <Transition.Child
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>

          {/* Sidebar Panel */}
          <Transition.Child
            enter="transition-transform ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg p-6">
              {/* Close Button */}
              <button
                className="absolute right-4 top-4 p-1 cursor-pointer"
                onClick={() => setIsVisible(false)}
              >
                <RiCloseLine className="text-3xl text-gray-600" />
              </button>
              <a href="/">
                <img src={logo} alt="logo" />
              </a>

              {/* Mobile Nav */}
              <ul className="mt-12 space-y-4">
                <li>
                  <a href="/" onClick={() => setIsVisible(false)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/products" onClick={() => setIsVisible(false)}>
                    Explore products
                  </a>
                </li>
                <li>
                  <a href="/services" onClick={() => setIsVisible(false)}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="/about" onClick={() => setIsVisible(false)}>
                    Who we are
                  </a>
                </li>
                <li>
                  <a href="/contact" onClick={() => setIsVisible(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default Header;
