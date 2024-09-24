import React from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { toggleSmSidebar } from "../../store/slices/appSlice";
import { cn } from "../../utils/cn";

const SmSidebar = () => {
  const isSmSidebarOpen = useSelector((store) => store.app.isSmSidebarOpen);
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(toggleSmSidebar());
  };
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 w-0 transition-colors",
        isSmSidebarOpen && "w-auto bg-slate-800/60 block"
      )}
    >
      <Sidebar isMenuOpen={isSmSidebarOpen} handleSidebar={handleSidebar} />
    </div>
  );
};

export default SmSidebar;
