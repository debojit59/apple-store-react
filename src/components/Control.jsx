import React from "react";

export default function Control({ HandleZoom, frameZoom, HandleReset, Open }) {
  return (
    <div className="absolute top-3 right-3 z-50 pointer-events-auto">
      <button
        className="text-2xl text-pink-400 cursor-pointer mr-3"
        onClick={HandleZoom}
      >
        <i className={frameZoom ? "bx bxs-zoom-out" : "bx bxs-zoom-in"}></i>
      </button>
      <button
        className={
          Open === 0
            ? `text-2xl text-pink-200 cursor-not-allowed`
            : `text-2xl text-pink-400 cursor-pointer`
        }
        onClick={HandleReset}
      >
        <i className="bx bx-x-circle"></i>
      </button>
    </div>
  );
}
