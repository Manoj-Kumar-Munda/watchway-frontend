import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { cn } from "../../utils/cn";
import { Link, useSearchParams } from "react-router-dom";
const Searchbar = ({ className = "" }) => {
  const [searchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get("search") || "");

  return (
    <div
      className={cn(
        "mx-2 hidden sm:flex pl-4 py-2 justify-center border shadow-md border-white/10 max-w-[512px] grow rounded-3xl group",
        className
      )}
    >
      <div className="w-full grow">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          type="text"
          className="outline-none w-full pl-2 font-Roboto bg-transparent"
          placeholder="Search"
        />
      </div>
      {searchText ? (
        <Link className="pr-4" to={`/search?search=${searchText}`} >
          <IoIosSearch size={20} />
        </Link>
      ) : (
        <button className="pr-4">
          <IoIosSearch size={20} />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
