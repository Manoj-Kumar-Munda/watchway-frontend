import React from "react";
import { AdvancedVideo, lazyload } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import useVideoInfo from "../hooks/useVideoInfo";
import { extractVideoId } from "../utils/helpers";
import ChannelBar from "../components/ChannelBar";

const Watch = () => {
  const { videoId } = useParams();
  const { data, status } = useVideoInfo(videoId);

  console.log(status);
  console.log(data);

  if (status === "pending") return <div>Loading...</div>;
  if (status === "error") return <div>Error</div>;

  return (
    <div className="max-w-screen-xl mx-auto flex">
      <div>
        <div className="max-w-screen-md aspect-video rounded-lg overflow-hidden ">
          <VideoPlayer videoId={extractVideoId(data?.data?.videoFile)} />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">{data?.data?.title}</h1>
          <ChannelBar owner={data?.data?.owner} />
        </div>
      </div>
    </div>
  );
};

export default Watch;
