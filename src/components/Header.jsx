import mobilePattern from "../assets/pattern-bg-mobile.png";
import desktopPattern from "../assets/pattern-bg-desktop.png";

function Header() {
  const bgImage = mobilePattern;
  return (
    <div
      className="text-white pb-32"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-2xl text-center p-4 font-bold">IP Address Tracker</h1>
    </div>
  );
}

export default Header;
