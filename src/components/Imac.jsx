import React from "react";
import { useState } from "react";
import { imacModels } from "../data";

export default function Imac() {
  const [selectedColor, SetSelectedColor] = useState("green");
  const [visibleLabel, setVisibleLabel] = useState("green");

  const HandleSelectedColor = (item) => {
    return SetSelectedColor(item.label.toLowerCase());
  };

  const getCurrentModel = () =>
    imacModels.find((item) => item.label.toLowerCase() === selectedColor);

  return (
    <div className="h-full grid grid-cols-2 grid-rows-2 md:gap-4 relative bg-white ">
      <div
        className="h-full col-span-1 row-span-2 flex flex-col items-center
      md:justify-center justify-center pt-8 bg-gray-50"
      >
        <img
          src={getCurrentModel().images.side}
          alt="images"
          className="2xl:max-w-full
        xl:max-w-36 max-w-24"
        />
      </div>
      <div
        className="h-full w-full flex flex-col col-span-1 row-span-1 bg-gray-50 
      p-4 items-center justify-center"
      >
        <img
          src={getCurrentModel().images.front}
          alt="images"
          className="2xl:max-w-full
        xl:max-w-52 max-w-48"
        />
      </div>
      <div
        className="bg-gray-50 flex flex-col justify-center items-center 
      p-4 col-span-1 row-span-1"
      >
        <img
          src={getCurrentModel().images.back}
          alt="images"
          className="2xl:max-w-full
        xl:max-w-52 max-w-48"
        />
      </div>
      <div
        className="absolute md:top-1/3 top-1/2 md:left-4 left-12
      transform-translate-1/2 flex flex-col lg:space-y-2 space-y-1 bg-gray-50"
      >
        {imacModels.map((item, index) => (
          <div className="flex items-center space-x-2">
            <button
              style={{ backgroundColor: item.bg }}
              className={`2xl:w-8 md:w-5 w-4 2xl:h-8 md:h-5 h-4 rounded-full 
          flex items-center justify-center ${
            selectedColor === item.label.toLowerCase() &&
            `border-3 border-blue-500`
          }`}
              onClick={() => {
                HandleSelectedColor(item);
                setVisibleLabel(item.label);
              }}
            ></button>
            {visibleLabel === item.label && (
              <span className="text-sm">{item.label}</span>
            )}
          </div>
        ))}

        <button
          type="button"
          className="text-sm mt-4 w-min py-2 px-3 bg-blue-400 
        rounded-full text-white"
        >
          Shop
        </button>
      </div>
    </div>
  );
}
