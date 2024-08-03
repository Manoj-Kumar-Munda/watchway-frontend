import Logo from "./Logo";
import Searchbar from "./Searchbar";
import { IoIosSearch } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { cn } from "../../utils/cn";
import SidebarHandlingBtn from "./SidebarHandlingBtn";
import { useState } from "react";
import AuthNavLinks from "./AuthNavLinks";

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <header className="sticky top-0 bg-white py-2 z-50">
      <div className="flex justify-between items-center px-2 sm:px-4 ">
        <div
          className={cn(
            "inline-flex items-center gap-4",
            showSearchBar && "hidden"
          )}
        >
          <SidebarHandlingBtn />
          <Logo />
        </div>
        {showSearchBar && (
          <div className="grow flex gap-1 items-center">
            <button
              onClick={() => setShowSearchBar(false)}
              className="hover:bg-gray-200 inline-flex justify-center items-center w-12 h-12 rounded-full text-center"
            >
              <FaArrowLeftLong size={20} />
            </button>
            <Searchbar className="flex sm:hidden" />
          </div>
        )}
        <Searchbar />

        <div
          className={cn("flex gap-4 items-center", showSearchBar && "hidden")}
        >
          <button
            onClick={() => setShowSearchBar(true)}
            className="sm:hidden hover:bg-gray-200 inline-flex justify-center items-center w-12 h-12 rounded-full text-center"
          >
            <IoIosSearch size={24} />
          </button>

          <AuthNavLinks />
          
        </div>
      </div>
    </header>
  );
};

export default Header;
