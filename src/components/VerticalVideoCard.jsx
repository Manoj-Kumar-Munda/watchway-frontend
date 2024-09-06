import React from "react";
import { cn } from "../utils/cn";
import {
  calculateTimeDifferenceToNow,
  extractVideoId,
  formatTime,
} from "../utils/helpers";
import { Link, useLocation } from "react-router-dom";
import ProfileCircle from "./Header/ProfileCircle";

const VerticalVideoCard = ({ video }) => {
  const { pathname } = useLocation();
  const isChannelPageVideo = pathname.includes("channel");
  return (
    <div
      className={cn("max-w-96 w-full pb-1 space-y-1", isChannelPageVideo && "max-w-80")}
    >
      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
        {!video?.isPublished && (
          <div className="absolute inset-0 z-20 bg-black/70 grid place-content-center">
            <span className="text-white text-sm font-medium">
              Not Published
            </span>
          </div>
        )}
        <Link to={`/watch/${extractVideoId(video?.videoFile)}`}>
          <img src={video?.thumbnail} className="w-full object-cover " />
        </Link>
        <div className="absolute z-10 bottom-1 right-1 text-xs py-1 font-bold rounded-md px-2 bg-black text-white">
          {formatTime(parseInt(video?.duration))}
        </div>
      </div>

      <div className="flex gap-2">
        <ProfileCircle imgSrc={video?.owner?.avatar} className="w-12 h-12 rounded-full overflow-hidden" />

        <div className="flex flex-col self-start pl-2">
          <Link to={`/watch/${video?._id}`}>
            <span className="font-Roboto font-semibold line-clamp-2">
              {video?.title}
            </span>
          </Link>
          <span className="text-sm font-medium text-gray-400">
            <Link to={`/channel/${video?.owner?.username}`}>
            {video?.owner?.fullName}
            </Link>
          </span>
          <div className="font-medium flex gap-2 text-sm text-gray-400">
            <span>{video?.views} views</span>
            <div className="w-1 h-1 bg-gray-500 self-center rounded-full"></div>

            <span>{calculateTimeDifferenceToNow(video?.createdAt)} ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalVideoCard;
