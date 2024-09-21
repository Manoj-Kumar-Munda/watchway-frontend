import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAddToPlaylist from "../../hooks/useAddToPlaylist";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/modalsSlice";
const PlaylistItem = ({ playlist }) => {
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const { mutate, data, status } = useAddToPlaylist();

  const addToPlaylistHandler = () => {
    mutate({ videoId, playlistId: playlist?._id });
  };

  useEffect(() => {
    let timer;
    if (status === "success" || status === "error") {
      timer = setTimeout(() => {
        dispatch(closeModal("playlist"));
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [status]);

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
