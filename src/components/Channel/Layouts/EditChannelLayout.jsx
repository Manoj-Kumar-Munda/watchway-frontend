import React from "react";
import { Outlet } from "react-router-dom";
import Tabs from "../Tabs";
import { editTabs } from "../../../utils/constants";

const EditChannelLayout = () => {
  return (
    <div>
      <Tabs tabs={editTabs} />
      <Outlet />
    </div>
  );
};

export default EditChannelLayout;
