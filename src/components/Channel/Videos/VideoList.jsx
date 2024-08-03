import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useChannelVideo } from "../../../hooks/useChannel";
import VerticalVideoCard from "../../VerticalVideoCard";
import { cn } from "../../../utils/cn";
import VerticalVideoCardContainer from "./VerticalVideoCardContainer";

const VideoList = () => {
  const { currentChannel, isAuthorized } = useSelector(
    (store) => store.channel
  );
  const { data, status } = useChannelVideo(currentChannel?._id);

  if (status === "pending") {
    //loading skeleton
    return <h1>Loading...</h1>;
  }

  return (
    <VerticalVideoCardContainer>
      {data?.data?.docs.map((video) => {
        return (
          <VerticalVideoCard
            video={video}
            key={video?._id}
            isMyChannel={isAuthorized}
          />
        );
      })}
    </VerticalVideoCardContainer>
  );
};

export default VideoList;
