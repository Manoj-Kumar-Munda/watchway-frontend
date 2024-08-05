import React from "react";
import { AdvancedVideo, lazyload } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";

const Watch = () => {
  const { videoId } = useParams();

  return (
    <div className="max-w-screen-xl mx-auto bg-amber-200">
      <VideoPlayer videoId={videoId} />
    </div>
  );
};

export default Watch;
