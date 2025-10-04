import React, { useState } from "react";
import { macbookModels } from "../Data/index";

export default function Macbook() {
  const [selectedChip, setSelectedChip] = useState(0);
  const [selectedColour, setSelectedColour] = useState(0);

  const currentMb = macbookModels[selectedChip];
  const currentColor = currentMb.colors[selectedColour];

  function handleSelectedChip(index) {
    setSelectedChip(index);
    // setSelectedColour(0); // optional reset
  }

  return (
    <div className="h-full flex flex-col items-center justify-around bg-white p-5">
      <h3 className="2xl:text-2xl xl:text-xl lg:text-xl md:text-xl font-semibold text-gray-800 mb-4">
        Choose your new Macbook Air
      </h3>

      <div className="flex">
        {macbookModels.map((item, index) => (
          <button
            key={index}
            className={`2xl:w-32 md:w-24 w-28 2xl:h-[4rem] md:h-10 h-10 flex flex-col justify-evenly items-center border
              ${index === 0 ? "rounded-l-xl" : "rounded-r-xl"}
              ${index > 0 ? "-ml-px" : ""} 
              ${
                selectedChip === index
                  ? "border-2 border-blue-400"
                  : "border-gray-300"
              }`}
            onClick={() => handleSelectedChip(index)}
          >
            <span className="2xl:text-sm xl:text-xs text-xs font-bold text-gray-800">
              With {item.chip} chip
            </span>
            <span className="2xl:text-sm xl:text-xs text-xs text-gray-600">
              {item.price}
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-col 2xl:p-1 md:items-start items-center">
        <div className="w-70 h-64  2xl:mb-0 mb-2">
          <img
            src={currentColor.img}
            alt={`MacBook with ${currentMb.chip}`}
            className="2xl:w-72 xl:w-54 w-48 h-full 2xl:mt-0 sm:mt-6 object-contain m-auto"
          />
        </div>

        <span className="2xl:text-base xl:text-sm text-center font-medium text-gray-800 md:text-left">
          {currentColor.label}
        </span>

        <div className="flex space-x-2 mb-3 md:text-left justify-center md:justify-start">
          {currentMb.colors.map((col, index) => (
            <button
              key={index}
              style={{ backgroundColor: col.bg }}
              className={`2xl:w-5 sm:w-4 w-3 2xl:h-5 sm:h-4 h-3 rounded-full border hover:border-blue-500
                ${
                  selectedColour === index
                    ? "border-blue-400 border-2"
                    : "border-transparent"
                }`}
              onClick={() => setSelectedColour(index)}
            />
          ))}
        </div>

        <img
          src={currentMb.icon}
          alt={`Apple ${currentMb.chip}`}
          className="h-10 w-10 2xl:mb-2 xl:mb-2"
        />

        <div className="2xl:mb-2 xl:mb-1 text-center md:text-left">
          {currentMb.specs.map((spec, index) => (
            <p
              key={index}
              className="2xl:text-sm xl:text-xm font-semibold text-gray-800"
            >
              {spec}
            </p>
          ))}
        </div>

        <button
          type="button"
          className="w-min text-sm py-1 px-3 rounded-full bg-blue-400 text-white mt-4 md:mt-0"
        >
          Buy
        </button>
      </div>
    </div>
  );
}
