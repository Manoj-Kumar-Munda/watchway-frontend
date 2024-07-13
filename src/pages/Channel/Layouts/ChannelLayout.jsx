import React from "react";
import { Outlet } from "react-router-dom";

const ChannelActivityLayout = () => {
  return (
    <div>
      ChannelActivity
      <Outlet />
    </div>
  );
};

export default ChannelActivityLayout;
