import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { MdHistory } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { IoFolderOpen } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import SidebarLinks from "./SidebarLinks";
const Sidebar = () => {
  return (
    <div className="max-w-56 pl-2 flex flex-col gap-2 h-screen w-full">
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
  );
};

export default Sidebar;
