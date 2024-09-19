import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/modalsSlice";

const CreatePlaylistModal = () => {
  const dispatch = useDispatch();
  return (
    <div className="relative max-w-screen-sm w-full text-start flex flex-col gap-2 bg-white/30 backdrop-blur-lg rounded-lg px-4 py-6">
      <div className="absolute top-3 right-3">
        <button onClick={() => dispatch(closeModal("playlist"))}>
          <ImCross />
        </button>
      </div>
      <h1 className="font-Poppins text-lg font-semibold">Create Playlist</h1>
      <input
        placeholder="Enter playlist title"
        className="font-medium bg-transparent border-b  outline-none pb-1 placeholder:text-gray-300"
      />
      <textarea
        id="playlist-desc"
        placeholder="Description"
        className=" bg-transparent border px-1 placeholder:text-gray-300 font-medium"
        rows={5}
      />
      <button
        id="submit-btn"
        className="text-sm bg-black/80 rounded-lg self-center px-4 py-2 "
      >
        Create
      </button>
    </div>
  );
};

export default CreatePlaylistModal;
