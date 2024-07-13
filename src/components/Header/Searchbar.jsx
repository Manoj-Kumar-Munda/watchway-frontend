import React from "react";
import { IoIosSearch } from "react-icons/io";
const Searchbar = () => {
  return (
    <div className="flex pl-4 py-2 justify-center border shadow-md border-gray-300 max-w-[512px] grow rounded-3xl group">
      <div className="w-full grow">
        <input type="text" className="outline-none w-full pl-2 font-Roboto" placeholder="Search" />
      </div>
      <button className="pr-4">
        <IoIosSearch size={20} />
      </button>
    </div>
  );
};

export default Searchbar;
