import { BiLike, BiSolidVideos } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { IoFolderOpen } from "react-icons/io5";
import { MdHistory, MdHomeFilled } from "react-icons/md";
import SidebarLinks from "./SidebarLinks";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn";
import { TfiDashboard } from "react-icons/tfi";

const SidebarItems = () => {
  const { user, status } = useSelector((store) => store.auth);
  return (
    <>
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
        {status && (
          <SidebarLinks title={"My Content"} link={`/channel/${user._id}`}>
            <BiSolidVideos size={24} />
          </SidebarLinks>
        )}

        <SidebarLinks title={"Collection"} link={"/collection"}>
          <IoFolderOpen size={24} />
        </SidebarLinks>
        <SidebarLinks title={"Subscribers"} link={"/subscribers"}>
          <FaUsers size={24} />
        </SidebarLinks>
        <SidebarLinks title={"Dashboard"} link={"/dashboard"}>
          <TfiDashboard size={24} />
        </SidebarLinks>
      </div>

      {status && <LogoutBtn />}
    </>
  );
};

export default SidebarItems;
