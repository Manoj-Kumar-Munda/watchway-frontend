import React from "react";
import { useSelector } from "react-redux";
import { useChannelVideo } from "../../hooks/useChannel";
import NoVideo from "../../components/Channel/Videos/NoVideo";

const Videos = () => {
  const { currentChannel } = useSelector((store) => store.channel);
  const { data, status } = useChannelVideo(currentChannel?._id);

  if (!currentChannel || status == "pending") {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="min-h-56 relative">
      {data?.data?.totalDocs === 0 ? <NoVideo /> : <h1>Videos</h1>}
    </div>
  );
};

export default Videos;
