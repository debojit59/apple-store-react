import React from "react";
import { watchModels } from "../data/index";

export default function Watch() {
  return (
    <div
      className="flex flex-col bg-white justify-around items-center h-full
  py-8 px-4"
    >
      <div
        className="2xl:text-4xl xl:text-3xl md:text-2xl 
      font-semibold text-gray-800 mb-8"
      >
        Which Apple Watch is right for you?
      </div>
      <div className="flex w-full justify-around">
        {watchModels.map((item, index) => (
          <div className="w-60 h-[430px] flex flex-col justify-around items-center">
            <div
              className="w-full h-64 mb-4 overflow-hidden relative group"
              key={index}
            >
              <img
                src={item.imgs[0]}
                alt={`${item.name} -1`}
                className="absolute w-full h-full
            object-contain opacity-100 group-hover:opacity-0 transition duration-300"
              />
              <img
                src={item.imgs[1]}
                alt={`${item.name} -2`}
                className="absolute w-full h-full
            object-contain opacity-0 group-hover:opacity-100 transition duration-300"
              />
            </div>

            <h3 className="2xl:text-xl xl:text-lg text-sm font-semibold">
              {item.name}
            </h3>
            <a href="#" className=" my-2 text-base text-blue-500">
              {item.price}
            </a>
            <div className="md:text-sm text-sx text-gray-700 my-2">
              {item.desc.map((des, index) => (
                <span className="block">{des}</span>
              ))}
            </div>
            <button
              className="w-min text-sm mt-4 py-1 px-4 bg-blue-400 rounded-full
           text-white"
            >
              Shop
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
