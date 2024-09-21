import React from "react";
import { useParams } from "react-router-dom";
import useGetPlaylist from "../hooks/useGetPlaylist";
import { LuListVideo } from "react-icons/lu";
import HorizontalVideoCard from "../components/HorizontalVideoCard";
import DotLoader from "../components/Loaders/DotLoader";

const Playlist = () => {
  const { playlistId } = useParams();
  const { data, status } = useGetPlaylist(playlistId);

  if (status === "pending") return <DotLoader />;
  if (status === "error") return <div>Error</div>;

  return (
    <div className=" max-w-screen-lg mx-auto">
      <div className="space-y-2 bg-themered-800 rounded-xl py-4 px-3  bg-gradient-to-t sm:bg-gradient-to-tl from-black/80 to-transparent">
        <div className="space-y-1">
          <div className=" sm:max-w-60 aspect-video w-full h-full mx-auto sm:mx-0 ">
            <img
              src={data?.data?.coverImage}
              className="object-cover rounded-xl"
            />
          </div>
          <h1 className="font-Poppins text-2xl font-semibold my-1">
            {data?.data?.name}
          </h1>
        </div>
        <div className="font-Poppins my-2 space-y-1">
          <h2 className="font-medium">Description</h2>
          <p className="text-gray-300 text-xs line-clamp-4 font-medium">
            {data?.data?.description}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm">
            <LuListVideo size={20} />
            <span className="text-sm font-semibold">
              {data?.data?.videos?.length}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-4 sm:bg-white/5 backdrop-blur-lg  rounded-xl px-3 py-4 bg-gradient-to-bl from wh">
        {data?.data?.videos?.map((video) => (
          <HorizontalVideoCard video={video} />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
