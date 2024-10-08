import React from "react";
import Header from "./Header/Header";
import Sidebar, { LgSidebar } from "./Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { noSidebarPaths } from "../utils/constants";
import { useSelector } from "react-redux";
import { cn } from "../utils/cn";
import SidebarOverLayout from "./SidebarOverLayout";

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();
  const { isMenuOpen, isSmSidebarOpen } = useSelector((store) => store.app);
  return (
    <div className="min-h-screen layout relative bg-white dark:bg-primary-dark">
      <Header />
      <div className="min-w-0">
        {noSidebarPaths.includes(pathname.split("/")[1]) ? (
          <SidebarOverLayout isSmMenuOpen={isSmSidebarOpen}>
            {children}
          </SidebarOverLayout>
        ) : (
          <>
            <Sidebar isSmMenuOpen={isSmSidebarOpen} />
            <LgSidebar isMenuOpen={isMenuOpen} />
            <div
              className={cn(
                "ml-0 transition-all duration-300 px-2 md:px-4 relative h-full",
                isMenuOpen && "md:ml-56"
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
