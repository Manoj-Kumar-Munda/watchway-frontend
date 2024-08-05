import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toggleMenu, toggleSmSidebar } from "../../store/slices/appSlice";
import { noSidebarPaths } from "../../utils/constants";
import { RxHamburgerMenu } from "react-icons/rx";

const SidebarHandlingBtn = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const handleSidebar = () => {
    dispatch(toggleMenu());
  };

  const handleSmSidebar = () => {
    dispatch(toggleSmSidebar());
  };
  return (
    <>
      {noSidebarPaths.includes(pathname.split("/")[1]) ? (
        <button
          className="hidden md:inline-block"
          onClick={() => handleSmSidebar()}
        >
          <RxHamburgerMenu size={24} />
        </button>
      ) : (
        <button
          className="hidden md:inline-block"
          onClick={() => handleSidebar()}
        >
          <RxHamburgerMenu size={24} />
        </button>
      )}
      <button className="md:hidden" onClick={() => handleSmSidebar()}>
        <RxHamburgerMenu size={24} />
      </button>
    </>
  );
};

export default SidebarHandlingBtn;
