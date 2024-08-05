import React from "react";
import { useSelector } from "react-redux";
import { useChannelVideo } from "../../hooks/useChannel";
import NoVideo from "../../components/Channel/Videos/NoVideo";
import toast, { Toaster } from "react-hot-toast";
import VideoList from "../../components/Channel/Videos/VideoList";

const Videos = () => {
  const { currentChannel, isAuthorized } = useSelector((store) => store.channel);
  const { data, status } = useChannelVideo(currentChannel?._id);
  const { uploadStatus } = useSelector((store) => store.app);

  console.log(currentChannel);
  
  if (!currentChannel || status == "pending") {
    return <h1>Loading...</h1>;
  }
  
  if (uploadStatus) {
    toast(uploadStatus);
  }

  return (
    <>
      <Toaster />
      <div className="min-h-56 relative">
        {data?.data?.totalDocs === 0 ? <NoVideo  /> : <VideoList  />}
      </div>
    </>
  );
};

export default Videos;
