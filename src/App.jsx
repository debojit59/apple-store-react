import { useState, useEffect } from "react";
import React from "react";
import Control from "./components/Control";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Iphone from "./components/IphonePage";
import Macbook from "./components/Macbook";
import Watch from "./components/Watch";
import Imac from "./components/Imac";
import Transition from "./components/Transition";

export default function App() {
  const [frameZoom, SetFrameZoom] = useState(false);
  const [Open, SetOpen] = useState(0);
  const [isLgScreen, setIsLGScreen] = useState(window.innerWidth >= 1024);
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  const HandleNavbar = () => {
    setIsOpenNavbar(!isOpenNavbar);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLGScreen(window.innerWidth >= 1024);
      if (window.innerWidth >= 1024) {
        SetFrameZoom(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener(`resize`, handleResize);
  }, []);

  function HandleZoom() {
    if (isLgScreen) {
      SetFrameZoom((frame) => !frame);
    }
  }

  function HandleFolder(index) {
    SetOpen(index);
  }

  function HandleReset() {
    SetOpen(0);
  }

  return (
    <>
      {/* safer than h-screen in production */}
      <div className="w-full min-h-screen grid place-items-center bg-white">
        <div
          className={`${
            frameZoom ? "min-w-[97vw] min-h-[97vh]" : ""
          } w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-h-[90vh] max-w-screen-2xl
          border border-gray-300 resize rounded-2xl overflow-auto relative transition-all duration-100 flex`}
        >
          <Navbar
            HandleFolderIcon={HandleFolder}
            Open={Open}
            isOpenNavbar={isOpenNavbar}
            HandleNavbar={HandleNavbar}
          />
          <Control
            HandleZoom={HandleZoom}
            frameZoom={frameZoom}
            Open={Open}
            HandleReset={HandleReset}
          />

          {/* give content a floor height so children using h-full don't collapse */}
          <div className="flex-grow min-h-[60vh] overflow-x-hidden">
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
