import React, { useState } from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import ProfileCircle from "./ProfileCircle";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowLeftLong } from "react-icons/fa6";
import { cn } from "../../utils/cn";

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <header className="sticky top-0 bg-white py-2 z-10">
      <div className="flex justify-between items-center px-2 sm:px-4 ">
        <div
          className={cn(
            "inline-flex items-center gap-4 max-w-56 w-full",
            showSearchBar && "hidden"
          )}
        >
          <button className="sm:hidden">
            <RxHamburgerMenu size={24} />
          </button>
          <Logo />
        </div>
        {showSearchBar && (
          <div className="grow flex gap-1 items-center">
            <button onClick={() => setShowSearchBar(false)} className="hover:bg-gray-200 inline-flex justify-center items-center w-12 h-12 rounded-full text-center">
              <FaArrowLeftLong size={20} />
            </button>
            <Searchbar className="flex md:hidden" />
          </div>
        )}
        <Searchbar />

        <div
          className={cn(
            "flex gap-4 items-center",
            showSearchBar && "hidden"
          )}
        >
          <button
            onClick={() => setShowSearchBar(true)}
            className="md:hidden hover:bg-gray-200 inline-flex justify-center items-center w-12 h-12 rounded-full text-center"
          >
            <IoIosSearch size={24} />
          </button>
          <ProfileCircle className="w-12 h-12" />
        </div>
      </div>
    </header>
  );
};

export default Header;
