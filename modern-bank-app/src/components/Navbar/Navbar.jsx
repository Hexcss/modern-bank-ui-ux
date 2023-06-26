import { useState } from "react";

import { close, logo, menu } from "../../assets";
import NavList from "./NavList";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuClass = isMenuOpen ? "flex" : "hidden";

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <NavList isMobile={false} />

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button onClick={handleToggle}>
          <img
            src={isMenuOpen ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
          />
        </button>

        <div
          className={`${menuClass} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <NavList isMobile={true}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
