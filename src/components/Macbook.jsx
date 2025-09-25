import React, { useState } from "react";
import { macbookModels } from "../Data"; // match their path/case if needed

export default function Macbook() {
  const [selectedChip, setSelectedChip] = useState(0);
  const [selectedColour, setSelectedColour] = useState(0);

  const currentMb = macbookModels[selectedChip];
  const currentColor = currentMb.colors[selectedColour];

  function handleSelectedChip(index) {
    setSelectedChip(index);
    // optional: reset colour like you did originally
    // setSelectedColour(0);
  }

  return (
    <div className="h-full flex flex-col items-center justify-around bg-white p-8">
      <h3 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl font-semibold text-gray-800 mb-8">
        Choose your new Macbook Air
      </h3>

      <div className="flex ">
        {macbookModels.map((item, index) => (
          <button
            key={index}
            className={`2xl:w-36 md:w-26 w-28 2xl:h-18 md:h-12 h-12 flex flex-col justify-evenly items-center border ${
              index === 0 ? "rounded-l-xl" : "rounded-r-xl"
            } ${
              selectedChip === index
                ? "border-2 border-blue-400"
                : "border-gray-300"
            }`}
            onClick={() => handleSelectedChip(index)}
          >
            <span className="2xl:text-lg xl:text-sm text-xs font-bold text-gray-800">
              With {item.chip} chip
            </span>
            <span className="2xl:text-base xl:text-sm text-xs text-gray-600">
              {item.price}
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-col 2xl:p-1 md:items-start items-center">
        <div className="w-80 h-64 2xl:mb-0 -mb-8">
          <img
            src={currentColor.img}
            alt={`MacBook with ${currentMb.chip}`}
            className="2xl:w-72 xl:w-52 w-48 h-full 2xl:mt-0 sm:mt-5"
          />
        </div>
        <span className="2xl:text-lg xl:text-sm text-center font-medium text-gray-800 md:text-left">
          {currentColor.label}
        </span>

        <div className="flex space-x-2 mb-4 md:text-left justify-center md:justify-start">
          {currentMb.colors.map((col, index) => (
            <button
              key={index}
              style={{ backgroundColor: col.bg }}
              className={`2xl:w-6 sm:w-5 w-4 2xl:h-6 sm:h-5 h-4 bg-[#2e3641] rounded-full border hover:border-blue-500 ${
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
          className="h-12 w-12 2xl:mb:2 xl:mb-2"
        />

        <div className="2xl:mb-4 xl:mb-2 text-center md:text-left">
          {currentMb.specs.map((spec, index) => (
            <p
              key={index}
              className="2xl:text-lg xl:text-base font-semibold text-gray-800"
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
