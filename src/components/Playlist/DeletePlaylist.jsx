import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modals/Modal";
import { closeModal, openModal } from "../../store/slices/modalsSlice";
import useDeletePlaylist from "../../hooks/useDeletePlaylist";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DeletePlaylist = () => {
  const { isOpen } = useSelector((store) => store.modals);
  const navigate = useNavigate();
  const { currentPlaylist } = useSelector((store) => store.playlist);
  const { mutate, status } = useDeletePlaylist();
  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isOpen) {
      setIsShowModal(false);
      dispatch(closeModal());
    }
  }, [isOpen]);

  useEffect(() => {
    let timer;
    if (status === "success") {
      toast.success("Playlist deleted");
      timer = setTimeout(() => {
        dispatch(closeModal());
        navigate(-1);
      }, 800);
    }
    if (status === "error") {
      toast.error("Failed to delete");
      timer = setTimeout(() => dispatch(closeModal()), 800);
    }

    return () => clearTimeout(timer);
  }, [status]);

  const clickHandler = () => {
    setIsShowModal(true);
    dispatch(openModal());
  };

  return (
    <>
      <Toaster />
      {isShowModal && (
        <Modal className="max-w-screen-xs">
          <div className="font-Poppins bg-white/30 backdrop-blur-xl rounded-xl flex flex-col gap-4 py-4 items-center">
            <h1 className="text-xl font-bold ">Delete Playlist</h1>
            <p>Are you sure you want to delete this playlist? </p>
            <div className="inline-flex gap-4">
              <button
                className="bg-themered-700 py-2 px-6 text-sm rounded-lg font-medium "
                onClick={() => mutate(currentPlaylist?._id)}
              >
                Delete
              </button>
              <button
                onClick={() => dispatch(closeModal())}
                className="bg-white text-primary-dark py-2 px-6 text-sm rounded-lg font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}

      <button
        onClick={() => clickHandler()}
        title="Delete playlist"
        className="absolute top-4 right-4 w-10 h-10 rounded-full transition-colors hover:bg-white/20 flex justify-center items-center"
      >
        <MdDelete size={20} />
      </button>
    </>
  );
};

export default DeletePlaylist;
