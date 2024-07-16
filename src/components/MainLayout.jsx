import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { noSidebarPaths } from "../utils/constants";
import { useSelector } from "react-redux";
import { cn } from "../utils/cn";

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log(isMenuOpen);
  console.log(pathname);
  return (
    <div className="min-h-screen layout relative">
      <Header />
      <div className="flex gap-4">
        {noSidebarPaths.includes(pathname) ? null : <Sidebar />}
        <div className={cn( "ml-0 transition-all duration-300",isMenuOpen && "ml-56")}>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
