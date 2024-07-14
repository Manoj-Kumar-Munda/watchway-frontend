import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex gap-4">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
