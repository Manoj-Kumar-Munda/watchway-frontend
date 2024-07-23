import React from "react";
import { Outlet } from "react-router-dom";
import Tabs from "../Tabs";

const tabs = [
  {
    title: "Videos",
    link: "",
  },
  {
    title: "Playlist",
    link: "./playlists",
  },
  {
    title: "Tweets",
    link: "./tweets",
  },
  {
    title: "Subscribed",
    link: "./subscribed-channels",
  },
];

const ChannelActivityLayout = () => {
  return (
    <div className="border  rounded-lg">
      <Tabs tabs={tabs} />
      <Outlet />
    </div>
  );
};

export default ChannelActivityLayout;
