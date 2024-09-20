import React from "react";
import { useParams } from "react-router-dom";
import useAddToPlaylist from "../../hooks/useAddToPlaylist";
import toast, { Toaster } from "react-hot-toast";
const PlaylistItem = ({ playlist }) => {
  const { videoId } = useParams();

  console.log(playlist);

  const { mutate, data, status } = useAddToPlaylist();

  const addToPlaylistHandler = () => {
    console.log(playlist?._id);

    mutate({ videoId, playlistId: playlist?._id });
  };

  return (
    <>
      <button
        onClick={addToPlaylistHandler}
        className="hover:bg-primary-dark/30 py-1.5 cursor-pointer rounded-lg transition duration-300 font-Poppins text-sm"
      >
        {playlist?.name}
      </button>
    </>
  );
};

export default PlaylistItem;
