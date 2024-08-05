import React from "react";
import { AdvancedVideo, lazyload } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

// Import required actions and qualifiers.
import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";
import { useParams } from "react-router-dom";

const Watch = () => {
  const { videoId } = useParams();
  
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dpcnehb4a",
    },
  });


  const myVideo = cld.video(videoId);

  // Apply the transformation.
  myVideo
    .resize(
      fill()
    ) // Crop the video, focusing on the faces.
    .roundCorners(byRadius(20)); // Round the corners.

  // Render the transformed video in a React component.
  return (
    <div className="w-full max-w-screen-md aspect-video">
      <AdvancedVideo cldVid={myVideo} controls autoPlay plugins={[lazyload()]} />
    </div>
  );
};

export default Watch;
