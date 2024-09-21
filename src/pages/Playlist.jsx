import React, { useCallback, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import useGetPlaylist from "../hooks/useGetPlaylist";
import { LuListVideo } from "react-icons/lu";
import HorizontalVideoCard from "../components/HorizontalVideoCard";
import DotLoader from "../components/Loaders/DotLoader";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { cn } from "../utils/cn";

const Playlist = () => {
  const { playlistId } = useParams();
  const { data, status } = useGetPlaylist(playlistId);
  const [videosToBeRemoved, setVideosToBeRemoved] = useState([]);
  const [isEditPlaylist, setIsEditPlaylist] = useState(false);
  console.log(videosToBeRemoved);

  const checkIsVideoExists = useCallback(
    (videoId) => {
      return videosToBeRemoved?.findIndex((video) => video === videoId) === -1
        ? false
        : true;
    },
    [videosToBeRemoved]
  );

  const checkboxHandler = (e, videoId) => {
    const index = videosToBeRemoved?.findIndex((video) => video === videoId);
    if (e.target.checked) {
      if (index === -1) {
        setVideosToBeRemoved((prev) => [...prev, videoId]);
      }
    } else {
      if (index > -1) {
        const arr = [...videosToBeRemoved];
        arr.splice(index, 1);
        console.log(arr);
        setVideosToBeRemoved(arr);
      }
    }
  };
  if (status === "pending") return <DotLoader />;
  if (status === "error") return <div>Error</div>;

  return (
    <div className=" max-w-screen-lg mx-auto mb-4">
      <div className="bg-themered-800 rounded-xl py-4 px-3  bg-gradient-to-t sm:bg-gradient-to-tl from-black/80 to-transparent">
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

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1 text-sm">
            <LuListVideo size={20} />
            <span className="text-sm font-semibold">
              {data?.data?.videos?.length}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              title="Edit playlist"
              className=""
              onClick={() => setIsEditPlaylist(!isEditPlaylist)}
            >
              <FaEdit color="#eee" size={20} />
            </button>

            <button title="Delete Playlist">
              <MdDelete color="#eee" size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 my-4 sm:bg-white/5 backdrop-blur-lg  rounded-xl px-3 py-4">
        {data?.data?.videos?.map((video) => (
          <div className={cn(isEditPlaylist && "flex gap-2")}>
            {isEditPlaylist && (
              <input
                type="checkbox"
                checked={checkIsVideoExists(video?._id)}
                onChange={(e) => checkboxHandler(e, video?._id)}
              />
            )}
            <HorizontalVideoCard video={video} />
          </div>
        ))}
      </div>

      {isEditPlaylist && (
        <div className="flex justify-end">
          <button className="bg-themered-700 font-Roboto py-2 px-8 rounded-lg">
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default Playlist;
