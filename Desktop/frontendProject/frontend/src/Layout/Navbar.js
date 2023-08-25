import React from "react";
import { Link } from "react-router-dom";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
   
      
        <header className=" p-4 flex justify-between mx-5">
          <Link to="/" className=" flex items-center gap-1 mt-3">
            <RocketLaunchIcon className=" w-10"/>
            <span className=" font-bold text-xl">Laos Travelling</span>
          </Link>
          {/* <div className="flex gap-3 border border-gray-300 rounded-full py-2 px-4 shadow-md shaodw-gray-300 font-medium  "> */}

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-white-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>

            <input
              type="search"
              id="default-search"
              className="block mx w-full p-4 pl-10 text-sm text-black border border-gray-300 rounded-3xl"
              placeholder="Search where you go "
              required
            />
           
          </div>
          {/* <button className="bg-primary text-white p-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button> */}
          {/* </div> */}
          <Link
            //to={user ? "/account" : "/login"}
            className="flex items-center  gap-2 border border-gray-300 rounded-full py-2 px-4 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <div className=" bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 relative top-1"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>Alaen</div>
          </Link>
        </header>
 
   
  );
}
