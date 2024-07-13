import React from "react";
import { FaYoutube } from "react-icons/fa";
const Logo = () => {
  return (
    <div className="inline-flex gap-1 items-center">
      <FaYoutube color="red" size={40} />
      <h1 className="font-Poppins font-semibold text-xl">WatchWay</h1>
    </div>
  );
};

export default Logo;
