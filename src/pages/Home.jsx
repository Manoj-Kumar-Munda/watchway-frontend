import React from "react";
import { useVideos } from "../hooks/useVideos";
import VerticalVideoCardContainer from "../components/Channel/Videos/VerticalVideoCardContainer";
import VerticalVideoCard from "../components/VerticalVideoCard";
import VideoSkeleton from "../components/Loaders/VideoSkeleton";

const Home = () => {
  const { data, status } = useVideos();
  if (status === "pending") {
    return (
      <VerticalVideoCardContainer>
        {new Array(6).fill(0).map((item, i) => (
          <VideoSkeleton key={i} />
        ))}
      </VerticalVideoCardContainer>
    );
  }

  return (
    <div className="w-full ">
      <VerticalVideoCardContainer>
        {data?.data?.docs?.map((video) => (
          <VerticalVideoCard key={video?._id} video={video} />
        ))}
      </VerticalVideoCardContainer>
    </div>
  );
};

export default Home;
