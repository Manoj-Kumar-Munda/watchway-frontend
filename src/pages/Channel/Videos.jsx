import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useChannelVideo } from "../../hooks/useChannel";
import NoVideoImg from "../../assets/svg/no-video.svg";
import NoData from "../../components/errorPages/NoData";

const Videos = () => {
  const { currentChannel } = useSelector((store) => store.channel);
  const { data, status } = useChannelVideo(currentChannel?._id);

  if (!currentChannel || status == "pending") {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="min-h-56 relative">
      {data?.data?.totalDocs === 0 ? (
        <NoData message="No Video uploaded" imgSrc={NoVideoImg} className="absolute inset-0" />
      ) : (
        <h1>Videos</h1>
      )}
    </div>
  );
};

export default Videos;
