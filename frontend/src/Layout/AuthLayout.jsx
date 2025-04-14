import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import { useState } from 'react';
// import { useEffect  } from 'react'
// import {useNavigate} from 'react-router-dom'


export default function AuthLayout(){
 
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-16 sm:pt-20">
        <Outlet/>
      </main>
      <footer>
      </footer>
    </div>
  );
}































































 {/* Fixed Navbar */}
      {/* <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16"> */}
            {/* Logo and Brand */}
            {/* <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-12 w-12 sm:h-16 sm:w-16">
                  <DotLottieReact
                    src="https://lottie.host/d260bd00-7db4-477f-8a78-67b9addee382/kZGsKssDVC.lottie"
                    loop
                    autoplay
                  />
                </div>
                <span className="ml-3 text-lg sm:text-xl font-semibold text-gray-900">E-Learning</span>
              </div>
            </div> */}

            {/* Mobile menu button */}
            {/* <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div> */}

            {/* Desktop Navigation Links */}
            {/* <div className="hidden sm:flex items-center space-x-4">
              <Link 
                to={'/auth/Login'} 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-md transition duration-150"
              >
                Login
              </Link>
              <Link 
                to={'/auth/Register'} 
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition duration-150"
              >
                Register
              </Link>
            </div>
          </div> */}

          {/* Mobile Navigation Links */}
          {/* {isMenuOpen && (
            <div className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link 
                  to={'/auth/Login'} 
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-md"
                >
                  Login
                </Link>
                <Link 
                  to={'/auth/Register'} 
                  className="block px-3 py-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
                >
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav> */}

      {/* Main Content with padding for fixed navbar */}