import React from "react";
import useGetWatchHistory from "../hooks/useGetWatchHistory";
import HorizontalVideoCard from "../components/HorizontalVideoCard";
import DotLoader from "../components/Loaders/DotLoader";

const WatchHistory = () => {
  const { data, status } = useGetWatchHistory();

  if (status === "pending") return <DotLoader />;
  if (status === "error") return <div>Error</div>;
  return (
    <div className="flex flex-col gap-4">
      {data?.data.map((video) => (
        <HorizontalVideoCard key={video._id} video={video} />
      ))}
    </div>
  );
};

export default WatchHistory;
