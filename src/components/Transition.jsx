import React from "react";
import { useEffect, useState } from "react";

export default function Transition({ Open, children }) {
  const [currentPage, setCurrentPage] = useState(Open);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (Open !== currentPage) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentPage(Open);
        setTransitioning(false);
      }, 500);
    }
  }, [currentPage, Open]);
  return (
    <div
      className="w-full h-full overflow-hidden relative"
      style={{ backgroundImage: "url(images/pages-bg.png)" }}
    >
      <div
        className={`absolute w-full h-full transition-transform duration-500 ${
          transitioning ? `-translate-y-full` : `translate-y-0`
        }`}
      >
        {children[currentPage]}
      </div>
    </div>
  );
}
