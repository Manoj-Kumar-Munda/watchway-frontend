import React from "react";
import { Outlet } from "react-router-dom";
import Tabs from "../Tabs";
import { tabs } from "../../../utils/constants";


const ChannelActivityLayout = () => {
  return (
    <div className="">
      <Tabs tabs={tabs} />
      <Outlet />
    </div>
  );
};

export default ChannelActivityLayout;
