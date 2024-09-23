import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetPlaylist from "../hooks/useGetPlaylist";
import HorizontalVideoCard from "../components/HorizontalVideoCard";
import DotLoader from "../components/Loaders/DotLoader";
import { cn } from "../utils/cn";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPlaylist,
  setIsAuthorized,
  setToDefault,
} from "../store/slices/playlistSlice";
import PlaylistHeader from "../components/Playlist/PlaylistHeader";

const Playlist = () => {
  const { playlistId } = useParams();
  const { data, status } = useGetPlaylist(playlistId);
  const [videosToBeRemoved, setVideosToBeRemoved] = useState([]);
  const [isEditPlaylist, setIsEditPlaylist] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    if (status === "success") {
      dispatch(setCurrentPlaylist(data?.data));
      dispatch(setIsAuthorized(data?.data?.owner === user._id));
    }

    return () => dispatch(setToDefault());
  }, [data]);

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
        setVideosToBeRemoved(arr);
      }
    }
  };
  if (status === "pending") return <DotLoader />;
  if (status === "error") return <div>Error</div>;

  return (
    <div className=" max-w-screen-lg mx-auto mb-4">
      <PlaylistHeader />

      <div className="flex flex-col gap-4 my-4 sm:bg-white/5 backdrop-blur-lg  rounded-xl px-3 py-4">
        {data?.data?.videos?.map((video) => (
          <div key={video?._id} className={cn(isEditPlaylist && "flex gap-2")}>
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
          <button
            disabled={videosToBeRemoved.length === 0}
            className={cn(
              "bg-themered-800 font-Poppins text-sm py-2.5 px-8 rounded-lg disabled:bg-themered-900/40 disabled:text-gray-400"
            )}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default Playlist;
