import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modals/Modal";
import { closeModal, openModal } from "../../store/slices/modalsSlice";

const DeletePlaylist = () => {
  const { currentPlaylist } = useSelector((store) => store.playlist);
  const { isOpen } = useSelector((store) => store.modals);
  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isOpen) {
      setIsShowModal(false);
      dispatch(closeModal());
    }
  }, [isOpen]);

  const clickHandler = () => {
    setIsShowModal(true);
    dispatch(openModal());
  };

  return (
    <>
      {isShowModal && (
        <Modal className="max-w-screen-xs">
          <div className="font-Poppins bg-white/10 backdrop-blur-xl rounded-xl flex flex-col gap-4 py-4 items-center">
            <h1 className="text-xl font-bold ">Delete Playlist</h1>
            <p>Are you sure you want to delete this playlist? </p>
            <div className="inline-flex gap-4">
              <button className="bg-themered-700 py-2 px-6 text-sm rounded-lg font-medium ">
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
