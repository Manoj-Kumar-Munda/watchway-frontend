import React from "react";
import { FaVideo } from "react-icons/fa";
import { TbPlaylist } from "react-icons/tb";
import { Link } from "react-router-dom";

const PlaylistCard = ({ playlist }) => {
  return (
    <Link to={`/playlist/${playlist?._id}`}>
      <div className="aspect-video w-full h-full relative">
        {playlist?.coverImage ? (
          <img src={playlist?.coverImage} alt="cover" className="" />
        ) : (
          <div className="flex justify-center items-center w-full h-full border border-white/10">
            No cover image
          </div>
        )}

        <div className="absolute bottom-0 right-0 left-0 py-2.5 px-2 flex justify-between items-center bg-white/10 backdrop-blur-lg">
          <div className="flex items-center gap-1">
            <TbPlaylist />
            <span className="font-Poppins text-sm ">{playlist?.name}</span>
          </div>

          <div className="flex items-center gap-1">
            <FaVideo />
            <span className="font-Poppins text-sm ">
              {playlist?.totalVideos}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlaylistCard;
