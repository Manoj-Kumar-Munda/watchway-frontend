import React from "react";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link className="inline-flex gap-1 items-center" to={"/"}>
      <FaYoutube color="red" size={40} />
      <h1 className="font-Poppins font-semibold text-xl">WatchWay</h1>
    </Link>
  );
};

export default Logo;
