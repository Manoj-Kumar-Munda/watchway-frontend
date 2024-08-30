import React from "react";
import Tab from "./Tab";

const Tabs = ({ tabs }) => {
  return (
    <div className=" border-b flex justify-start gap-2 p-1 rounded-t-lg">
      {tabs.map((item) => (
        <Tab key={item?.title} title={item?.title} link={item?.link} />
      ))}
    </div>
  );
};

export default Tabs;
