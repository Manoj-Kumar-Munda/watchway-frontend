import React from "react";
import { useSelector } from "react-redux";
import { useChannelVideo } from "../../../hooks/useChannel";
import VerticalVideoCard from "../../VerticalVideoCard";

const VideoList = () => {
  const { currentChannel } = useSelector((store) => store.channel);
  const { data, status } = useChannelVideo(currentChannel?._id);

  if (status === "pending") {
    //loading skeleton
    return <h1>Loading...</h1>;
  }

  return (
    <div class="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4 pt-2">
      {data?.data?.docs.map((video) => {
        return (
          <VerticalVideoCard
            video={video}
            key={video?._id}
            isMyChannel={true}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
