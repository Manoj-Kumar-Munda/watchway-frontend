import React from "react";
import ProfileCircle from "./Header/ProfileCircle";
import { IoEyeSharp } from "react-icons/io5";
import { calculateTimeDifferenceToNow } from "../utils/helpers";
import { Link } from "react-router-dom";

const HorizontalVideoCard = ({ video }) => {
  console.log(video);
  return (
    <div className="max-w-80 sm:max-w-none mx-auto sm:mx-0">
      <div className="flex  flex-col sm:flex-row gap-x-4">
        <div className="max-w-80 w-full overflow-hidden shrink-0">
          <img src={video?.thumbnail} className="w-full h-full rounded-xl" />
        </div>

        <div className="inline-flex flex-col sm:gap-2 pt-1 px-2 sm:px-0 sm:pt-0 sm:py-2">
          <div>
            <h2>{video?.title}</h2>
            <p className="line-clamp-1 sm:line-clamp-2 text-xs font-medium text-gray-300">
              {video?.description}
            </p>
          </div>
          <div className="hidden sm:flex gap-2 items-center">
            <span className="text-sm text-gray-300">{video?.views} views</span>

            <span className="text-gray-300 text-lg">&middot;</span>

            <div className="text-gray-300 text-sm">
              {calculateTimeDifferenceToNow(video?.createdAt)} ago
            </div>
          </div>

          {/* Add channel page link */}

          <span className="text-sm text-gray-400 font-medium">
            <Link to={`/channel/${video?.owner?._id}`}>{video?.owner?.fullName}</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HorizontalVideoCard;
