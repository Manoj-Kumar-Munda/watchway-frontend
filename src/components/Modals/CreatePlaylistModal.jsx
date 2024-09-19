import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/modalsSlice";
import useCreatePlaylist from "../../hooks/useCreatePlaylist";
import { toast, Toaster } from "react-hot-toast";

const CreatePlaylistModal = () => {
  const dispatch = useDispatch();
  const { mutate, status } = useCreatePlaylist();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    let timer;
    if (status === "error") {
      toast.error("Failed. Try again");
    }
    if (status === "success") {
      toast.success("Playlist created!");
      timer = setTimeout(() => dispatch(closeModal("playlist")), 700);
    }

    return () => clearTimeout(timer);
  }, [status]);

  const onSubmit = () => {
    if (!name || !description) {
      return;
    }
    mutate({ name, description });
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="relative max-w-screen-sm w-full text-start flex flex-col gap-2 bg-white/30 backdrop-blur-lg rounded-lg px-4 py-6">
        <div className="absolute top-3 right-3">
          <button onClick={() => dispatch(closeModal("playlist"))}>
            <ImCross />
          </button>
        </div>
        <h1 className="font-Poppins text-lg font-semibold">Create Playlist</h1>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter playlist title"
          className="placeholder:font-medium bg-transparent border-b  outline-none pb-1 placeholder:text-gray-300"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="playlist-desc"
          placeholder="Description"
          className=" bg-transparent border px-1 placeholder:text-gray-300"
          rows={5}
        />
        <button
          id="submit-btn"
          className="text-sm bg-black/80 rounded-lg self-center px-4 py-2 "
          onClick={onSubmit}
        >
          Create
        </button>
      </div>
    </>
  );
};

export default CreatePlaylistModal;
