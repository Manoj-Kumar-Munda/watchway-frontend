import React from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import ProfileCircle from "./ProfileCircle";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white py-2 z-10">
      <div className="flex justify-between items-center px-4">
        <div className="inline-flex items-center gap-4">
          <RxHamburgerMenu size={24} />
          <Logo />
        </div>
        <Searchbar />
        <ProfileCircle className="w-12 h-12" />
      </div>
    </header>
  );
};

export default Header;
