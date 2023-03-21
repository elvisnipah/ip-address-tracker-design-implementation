import mobilePattern from "../assets/pattern-bg-mobile.png";
import desktopPattern from "../assets/pattern-bg-desktop.png";
import { useState, useEffect } from "react";

function Header() {
  const [windowSize, setWindowSize] = useState([window.innerWidth]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const bgImage = windowSize < 1024 ? mobilePattern : desktopPattern;

  return (
    <div
      className="text-white pb-60"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-2xl text-center p-4 font-medium lg:pt-12">
        IP Address Tracker
      </h1>
    </div>
  );
}

export default Header;
