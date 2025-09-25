import { useState } from "react";
import React from "react";
import Control from "./components/Control";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Iphone from "./components/IphonePage";
import Macbook from "./components/Macbook";
import Watch from "./components/Watch";
import { watchModels } from "./Data";
import Imac from "./components/Imac";
import Transition from "./components/Transition";

export default function App() {
  const [frameZoom, SetFrameZoom] = useState(false);
  const [Open, SetOpen] = useState(0);

  function HandleZoom() {
    SetFrameZoom((frame) => !frame);
  }

  function HandleFolder(index) {
    SetOpen(index);
  }

  function HandleReset() {
    SetOpen(0);
  }

  return (
    <>
      <div className="w-full h-screen grid place-items-center">
        <div
          className={` ${
            frameZoom && `min-w-[97vw] min-h-[97vh]`
          }w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh]
        border border-gray-300 resize rounded-2xl overflow-auto relative transition-all 
           duration-100 flex`}
        >
          <Navbar HandleFolderIcon={HandleFolder} Open={Open} />
          <Control
            HandleZoom={HandleZoom}
            frameZoom={frameZoom}
            Open={Open}
            HandleReset={HandleReset}
          />

          <div className="flex-grow">
            <Transition Open={Open}>
              <Home onNavigate={HandleFolder} />
              <Iphone />
              <Macbook />
              <Watch />
              <Imac />
            </Transition>
          </div>
        </div>
      </div>
    </>
  );
}
