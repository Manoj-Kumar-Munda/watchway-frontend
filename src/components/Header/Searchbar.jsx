import React from "react";
import { IoIosSearch } from "react-icons/io";
import { cn } from "../../utils/cn";
const Searchbar = ({ className = "" }) => {
  return (
    <div
      className={cn(
        "mx-2 hidden md:flex pl-4 py-2 justify-center border shadow-md border-gray-300 max-w-[512px] grow rounded-3xl group",
        className
      )}
    >
      <div className="w-full grow">
        <input
          type="text"
          className="outline-none w-full pl-2 font-Roboto"
          placeholder="Search"
        />
      </div>
      <button className="pr-4">
        <IoIosSearch size={20} />
      </button>
    </div>
  );
};

export default Searchbar;
