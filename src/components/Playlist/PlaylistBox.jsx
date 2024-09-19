import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/slices/modalsSlice";

const PlaylistBox = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-56 flex flex-col gap-1 text-center ">
      <div>Songs</div>
      <div>Fav</div>
      <button
        onClick={() => dispatch(openModal("playlist"))}
        className="border-t border text-center self-center px-2 py-1 text-sm "
      >
        Create playlist
      </button>
    </div>
  );
};

export default PlaylistBox;
