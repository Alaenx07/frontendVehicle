import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className=" mx-5 mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Link to={'/Home/booking'} className=" p-5 hover:cursor-pointer">
        <div className=" aspect-square shadow shadow-gray-500 rounded-2xl overflow-hidden ">
          <img
            className="w-full h-full rounded-2xl object-cover aspect-square  "
            src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="bicycle"
          />
        </div>
        <div className="flex my-2 justify-between">
          <h1 className="text-center font-semibold text-lg ">Zeus</h1>
          <h1 className="flex gap-1">
            {" "}
            <StarIcon className="w-5 h-5" /> 4.6
          </h1>
        </div>
        <p className=" text-sm text-gray-400">Address: Xiengkhuang province</p>
        <p className=" text-xs text-gray-400 mt-1">
          Time Open: 7AM -{">"} 10PM
        </p>
        <p className=" text-md font-semibold mt-2"> K 100,000 per day</p>
      </Link>
      <Link className=" p-5 hover:cursor-pointer">
        <div className=" aspect-square shadow shadow-gray-800 rounded-2xl overflow-hidden ">
          <img
            className="w-full h-full rounded-2xl object-cover aspect-square  "
            src="https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW90b3JiaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            alt="Bike"
          />
        </div>
        <div className="flex my-2 justify-between">
          <h1 className="text-center font-semibold text-lg ">Big Bike</h1>
          <h1 className="flex gap-1">
            {" "}
            <StarIcon className="w-5 h-5" /> 4.6
          </h1>
        </div>
        <p className=" text-sm text-gray-400">Address: Vientiane Capital</p>
        <p className=" text-xs text-gray-400 mt-1">
          Time Open: 7AM -{">"} 10PM
        </p>
        <p className=" text-md font-semibold mt-2"> K 250,000 per day</p>
      </Link>
      <Link className=" p-5 hover:cursor-pointer">
        <div className=" aspect-square shadow shadow-gray-800 rounded-2xl overflow-hidden ">
          <img
            className="w-full h-full rounded-2xl object-cover aspect-square  "
            src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
            alt="car"
          />
        </div>
        <div className="flex my-2 justify-between">
          <h1 className="text-center font-semibold text-lg ">Beetle</h1>
          <h1 className="flex gap-1">
            {" "}
            <StarIcon className="w-5 h-5" /> 4.6
          </h1>
        </div>
        <p className=" text-sm text-gray-400">Address: VangVieng</p>
        <p className=" text-xs text-gray-400 mt-1">
          Time Open: 7AM -{">"} 10PM
        </p>
        <p className=" text-md font-semibold mt-2"> K 500,000 per day</p>
      </Link>
      <Link className=" p-5 hover:cursor-pointer">
        <div className=" aspect-square shadow shadow-gray-800 rounded-2xl overflow-hidden ">
          <img
            className="w-full h-full rounded-2xl object-cover aspect-square  "
            src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="bicycle"
          />
        </div>
        <div className="flex my-2 justify-between">
          <h1 className="text-center font-semibold text-lg ">Zeus</h1>
          <h1 className="flex gap-1">
            {" "}
            <StarIcon className="w-5 h-5" /> 4.6
          </h1>
        </div>
        <p className=" text-sm text-gray-400">Address: Xiengkhuang province</p>
        <p className=" text-xs text-gray-400 mt-1">
          Time Open: 7AM -{">"} 10PM
        </p>
        <p className=" text-md font-semibold mt-2"> K 100,000 per day</p>
      </Link>
      <Link className=" p-5 hover:cursor-pointer">
        <div className=" aspect-square shadow shadow-gray-800 rounded-2xl overflow-hidden ">
          <img
            className="w-full h-full rounded-2xl object-cover aspect-square  "
            src="https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW90b3JiaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            alt="Bike"
          />
        </div>
        <div className="flex my-2 justify-between">
          <h1 className="text-center font-semibold text-lg ">Big Bike</h1>
          <h1 className="flex gap-1">
            {" "}
            <StarIcon className="w-5 h-5" /> 4.6
          </h1>
        </div>
        <p className=" text-sm text-gray-400">Address: Vientiane Capital</p>
        <p className=" text-xs text-gray-400 mt-1">
          Time Open: 7AM -{">"} 10PM
        </p>
        <p className=" text-md font-semibold mt-2"> K 250,000 per day</p>
      </Link>
      <Link className=" p-5 hover:cursor-pointer">
        <div className=" aspect-square shadow shadow-gray-800 rounded-2xl overflow-hidden ">
          <img
            className="w-full h-full rounded-2xl object-cover aspect-square  "
            src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
            alt="car"
          />
        </div>
        <div className="flex my-2 justify-between">
          <h1 className="text-center font-semibold text-lg ">Beetle</h1>
          <h1 className="flex gap-1">
            {" "}
            <StarIcon className="w-5 h-5" /> 4.6
          </h1>
        </div>
        <p className=" text-sm text-gray-400">Address: VangVieng</p>
        <p className=" text-xs text-gray-400 mt-1">
          Time Open: 7AM -{">"} 10PM
        </p>
        <p className=" text-md font-semibold mt-2"> K 500,000 per day</p>
      </Link>
      <Link className=" p-5 hover:cursor-pointer">
        <div className=" aspect-square shadow shadow-gray-800 rounded-2xl overflow-hidden ">
          <img
            className="w-full h-full rounded-2xl object-cover aspect-square  "
            src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="bicycle"
          />
        </div>
        <div className="flex my-2 justify-between">
          <h1 className="text-center font-semibold text-lg ">Zeus</h1>
          <h1 className="flex gap-1">
            {" "}
            <StarIcon className="w-5 h-5" /> 4.6
          </h1>
        </div>
        <p className=" text-sm text-gray-400">Address: Xiengkhuang province</p>
        <p className=" text-xs text-gray-400 mt-1">
          Time Open: 7AM -{">"} 10PM
        </p>
        <p className=" text-md font-semibold mt-2"> K 100,000 per day</p>
      </Link>
      <Link className=" p-5 hover:cursor-pointer">
        <div className=" aspect-square shadow shadow-gray-800 rounded-2xl overflow-hidden ">
          <img
            className="w-full h-full rounded-2xl object-cover aspect-square  "
            src="https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW90b3JiaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            alt="Bike"
          />
        </div>
        <div className="flex my-2 justify-between">
          <h1 className="text-center font-semibold text-lg ">Big Bike</h1>
          <h1 className="flex gap-1">
            {" "}
            <StarIcon className="w-5 h-5" /> 4.6
          </h1>
        </div>
        <p className=" text-sm text-gray-400">Address: Vientiane Capital</p>
        <p className=" text-xs text-gray-400 mt-1">
          Time Open: 7AM -{">"} 10PM
        </p>
        <p className=" text-md font-semibold mt-2"> K 250,000 per day</p>
      </Link>
      <Link className=" p-5 hover:cursor-pointer">
        <div className=" aspect-square shadow shadow-gray-800 rounded-2xl overflow-hidden ">
          <img
            className="w-full h-full rounded-2xl object-cover aspect-square  "
            src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
            alt="car"
          />
        </div>
        <div className="flex my-2 justify-between">
          <h1 className="text-center font-semibold text-lg ">Beetle</h1>
          <h1 className="flex gap-1">
            {" "}
            <StarIcon className="w-5 h-5" /> 4.6
          </h1>
        </div>
        <p className=" text-sm text-gray-400">Address: VangVieng</p>
        <p className=" text-xs text-gray-400 mt-1">
          Time Open: 7AM -{">"} 10PM
        </p>
        <p className=" text-md font-semibold mt-2"> K 500,000 per day</p>
      </Link>
      
    </div>
  );
}
