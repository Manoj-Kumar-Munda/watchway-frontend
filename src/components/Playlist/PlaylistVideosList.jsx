import React, { useState } from "react";
import { useSelector } from "react-redux";
import { cn } from "../../utils/cn";
import HorizontalVideoCard from "../HorizontalVideoCard";
import useRemoveVideosFromPlaylist from "../../hooks/useRemoveVideosFromPlaylist";

const PlaylistVideosList = ({ videos }) => {
  const [videosToBeRemoved, setVideosToBeRemoved] = useState([]);
  const { currentPlaylist, isUpdatePlaylist } = useSelector(
    (store) => store.playlist
  );
  const { mutate, status } = useRemoveVideosFromPlaylist();

  const checkIsVideoExists = (videoId) => {
    return videosToBeRemoved?.findIndex((video) => video === videoId) === -1
      ? false
      : true;
  };

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

  const removeVideoHandler = () => {
    mutate({
      playlistId: currentPlaylist?._id,
      data: { videoIds: videosToBeRemoved },
    });
  };

  return (
    <>
      <div className="flex flex-col gap-4 my-4 sm:bg-white/5 backdrop-blur-lg  rounded-xl px-3 py-4">
        {videos?.length === 0 ? (
          <div className="min-h-40 flex justify-center items-center">
            <h2>No videos</h2>
          </div>
        ) : (
          videos?.map((video) => (
            <div
              key={video?._id}
              className={cn(isUpdatePlaylist && "flex gap-2")}
            >
              {isUpdatePlaylist && (
                <input
                  type="checkbox"
                  checked={checkIsVideoExists(video?._id)}
                  onChange={(e) => checkboxHandler(e, video?._id)}
                />
              )}
              <HorizontalVideoCard video={video} />
            </div>
          ))
        )}
      </div>

      {isUpdatePlaylist && (
        <div className="flex justify-end">
          <button
            disabled={videosToBeRemoved.length === 0}
            className={cn(
              "bg-themered-800 font-Poppins text-sm py-2.5 px-8 rounded-lg disabled:bg-themered-900/40 disabled:text-gray-400"
            )}
            onClick={removeVideoHandler}
          >
            Remove
          </button>
        </div>
      )}
    </>
  );
};

export default PlaylistVideosList;
