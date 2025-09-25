import React from "react";
import { iphoneModels } from "../Data/index";

export default function Iphone() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-around bg-white p-8">
      <h3 className="2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8">
        Which iPhone is right for you?
      </h3>
      <div className="flex justify-between w-full">
        {iphoneModels.map((item, index) => (
          <div
            key={index}
            className=" bg-white flex flex-col items-center pt-10 px-3"
          >
            <img
              src={item.img}
              alt={item.name}
              className="2xl:w-56 lg:w-48 sm:w-36 md:h-64 sm:h-48"
            />
            <span
              className="2xl:text-2xl xl:text-xl lg:text-base 
        sm:text-sm font-semibold mt-6"
            >
              {item.name}
            </span>
            <span
              className="text-xl lg:text-base 
        sm:text-sm mt-4"
            >
              {item.description}
            </span>
            <p
              className="text-blue-400 mt-4 text-xl lg:text-base 
        sm:text-sm"
            >
              {item.price}
            </p>
            <button className=" bg-blue-500 px-8 py-2 rounded-full text-white mt-2">
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
