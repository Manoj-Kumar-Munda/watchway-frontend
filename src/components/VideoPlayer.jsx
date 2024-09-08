import { AdvancedVideo, lazyload } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import React from "react";

const VideoPlayer = ({videoId}) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dpcnehb4a",
    },
  });
  const myVideo = cld.video(videoId);
  myVideo.resize(fill()).roundCorners(byRadius(20));
  return (
   
      <AdvancedVideo
        cldVid={myVideo}
        controls
        autoPlay
        plugins={[lazyload()]}
      />
    
  );
};

export default VideoPlayer;
