import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useChannelVideo } from "../../hooks/useChannel";
import NoVideo from "../../components/Channel/Videos/NoVideo";
import toast, { Toaster } from "react-hot-toast";

const Videos = () => {
  const { currentChannel } = useSelector((store) => store.channel);
  const { data, status } = useChannelVideo(currentChannel?._id);
  const { uploadStatus } = useSelector((store) => store.app);

  console.log(uploadStatus);

  if (!currentChannel || status == "pending") {
    return <h1>Loading...</h1>;
  }

  if (!uploadStatus) {
    toast(uploadStatus);
  }

  return (
    <>
      <Toaster />
      <div className="min-h-56 relative">
        {data?.data?.totalDocs === 0 ? <NoVideo /> : <h1>Videos</h1>}
      </div>
    </>
  );
};

export default Videos;
