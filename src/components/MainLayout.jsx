import React from "react";
import Header from "./Header/Header";
import Sidebar, { LgSidebar } from "./Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { noSidebarPaths } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cn } from "../utils/cn";
import SidebarOverLayout from "./SidebarOverLayout";
import { toggleMenu } from "../store/slices/appSlice";

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();
  const { isMenuOpen, isSmSidebarOpen } = useSelector((store) => store.app);

  console.log(isMenuOpen);
  console.log(isSmSidebarOpen);


  console.log(isMenuOpen);
  console.log(pathname);
  return (
    <div className="min-h-screen layout relative">
      <Header />
      <div className="">
        {noSidebarPaths.includes(pathname) ? (
          <SidebarOverLayout isSmMenuOpen={isSmSidebarOpen}>
            {children}
          </SidebarOverLayout>
        ) : (
          <>
            <Sidebar isSmMenuOpen={isSmSidebarOpen} />
            <LgSidebar isMenuOpen={isMenuOpen} />
            <div
              className={cn(
                "ml-0 transition-all duration-300",
                isMenuOpen && " md:ml-56"
              )}
            >
              {children}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
