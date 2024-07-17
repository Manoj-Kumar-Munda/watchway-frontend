import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { MdHistory } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { IoFolderOpen } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import SidebarLinks from "./SidebarLinks";
import Logo from "../Header/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { cn } from "../../utils/cn";
import { useDispatch } from "react-redux";
import { toggleMenu, toggleSmSidebar } from "../../store/slices/appSlice";

const Sidebar = ({ isSmMenuOpen = false, className = "" }) => {
  const dispatch = useDispatch();

  const handleSmSidebar = () => {
    dispatch(toggleSmSidebar());
  };

  console.log(isSmMenuOpen);
  return (
    <div
      className={cn(
        " fixed inset-0 z-50 w-0 transition-colors ",
        isSmMenuOpen && "w-auto bg-slate-800/60 block"
      )}
    >
      <div
        className={cn(
          "bg-white fixed top-0 bottom-0 z-50 transition-all duration-300 -left-full  max-w-56 px-2 sm:px-4 flex flex-col gap-2 w-full",
          isSmMenuOpen && "left-0"
        )}
      >
        <div className="inline-flex items-center gap-4 py-3">
          <button className="">
            <RxHamburgerMenu size={24} onClick={handleSmSidebar} />
          </button>
          <Logo />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <SidebarLinks title={"Home"} link={"/"}>
            <MdHomeFilled size={24} />
          </SidebarLinks>
          <SidebarLinks title={"Liked Videos"} link={"/liked"}>
            <BiLike size={24} />
          </SidebarLinks>
          <SidebarLinks title={"Watch History"} link={"/history"}>
            <MdHistory size={24} />
          </SidebarLinks>
          <SidebarLinks title={"My Content"} link={"/content"}>
            <BiSolidVideos size={24} />
          </SidebarLinks>
          <SidebarLinks title={"Collection"} link={"/collection"}>
            <IoFolderOpen size={24} />
          </SidebarLinks>
          <SidebarLinks title={"Subscribers"} link={"/subscribers"}>
            <FaUsers size={24} />
          </SidebarLinks>
        </div>
      </div>
    </div>
  );
};

export const LgSidebar = ({ isMenuOpen = true, className = "" }) => {
  const dispatch = useDispatch();
  const handleLgSidebar = () => {
    dispatch(toggleMenu());
  };
  return (
    <div
      className={cn(
        "hidden  bg-white fixed top-0 bottom-0 z-50 transition-all duration-300 -left-full  max-w-56 px-2 sm:px-4 md:flex flex-col gap-2 w-full",
        isMenuOpen && "md:left-0"
      )}
    >
      <div className="inline-flex items-center gap-4 py-3">
        <button className="hidden md:inline">
          <RxHamburgerMenu size={24} onClick={handleLgSidebar} />
        </button>
        <Logo />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <SidebarLinks title={"Home"} link={"/"}>
          <MdHomeFilled size={24} />
        </SidebarLinks>
        <SidebarLinks title={"Liked Videos"} link={"/liked"}>
          <BiLike size={24} />
        </SidebarLinks>
        <SidebarLinks title={"Watch History"} link={"/history"}>
          <MdHistory size={24} />
        </SidebarLinks>
        <SidebarLinks title={"My Content"} link={"/content"}>
          <BiSolidVideos size={24} />
        </SidebarLinks>
        <SidebarLinks title={"Collection"} link={"/collection"}>
          <IoFolderOpen size={24} />
        </SidebarLinks>
        <SidebarLinks title={"Subscribers"} link={"/subscribers"}>
          <FaUsers size={24} />
        </SidebarLinks>
      </div>
    </div>
  );
};

export default Sidebar;
