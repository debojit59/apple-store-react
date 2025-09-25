import React from "react";
import { items } from "../Data/index";

const Home = ({ onNavigate }) => {
  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-4 bg-gray-50">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col h-full w-full items-center justify-center bg-white"
          onClick={() => onNavigate(item.pageIndex)}
        >
          <span
            className="text-xl font-bold bg-gradient-to-b from-red-500 to-yellow-300 
                     bg-clip-text text-transparent tracking-wide"
          >
            {item.label}
          </span>
          <img
            src={item.img}
            alt={item.img}
            className="max-w-[60%] max-h-[60%] object-contain"
            draggable="false"
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
