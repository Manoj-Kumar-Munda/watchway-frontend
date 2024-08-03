import React from "react";
import { cn } from "../utils/cn";
import { calculateTimeDifferenceToNow, formatTime } from "../utils/helpers";
import { Link } from "react-router-dom";

const VerticalVideoCard = ({ video, isMyChannel }) => {
  return (
    <div className={cn("max-w-[450px] w-full pb-1", isMyChannel && "max-w-80")}>
      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
        {!video?.isPublished && (
          <div className="absolute inset-0 z-20 bg-black/70 grid place-content-center">
            <span className="text-white text-sm font-medium">
              Not Published
            </span>
          </div>
        )}
        <Link to={`/watch/${video?._id}`}>
          <img src={video?.thumbnail} className="w-full object-cover " />
        </Link>
        <div className="absolute z-10 bottom-1 right-1 text-xs py-1 font-bold rounded-md px-2 bg-black text-white">
          {formatTime(video?.duration)}
        </div>
      </div>

      <div className="flex flex-col self-start pl-2">
        <Link to={`/watch/${video?._id}`}>
          <span className="font-Roboto font-medium line-clamp-2">
            {video?.title}
          </span>
        </Link>
        <div className="font-medium flex gap-2 text-sm">
          <span>{video?.views} views</span>
          <div className="w-1 h-1 bg-gray-500 self-center rounded-full"></div>

          <span>{calculateTimeDifferenceToNow(video?.createdAt)} ago</span>
        </div>
      </div>
    </div>
  );
};

export default VerticalVideoCard;
