import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import Modal from "../Modals/Modal";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/slices/modalsSlice";
import UpdatePlaylistForm from "./UpdatePlaylistForm";

const UpdatePlaylist = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modals);
  console.log(isOpen);

  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsShowModal(false);
    }
  }, [isOpen]);

  const showModalHandler = () => {
    setIsShowModal(true);
    dispatch(openModal());
  };
  return (
    <>
      {isShowModal && (
        <Modal className="max-w-screen-sm font-Poppins">
          <div className="w-full bg-white/30 backdrop-blur-lg px-3 rounded-xl py-3">
            <h1 className="text-lg font-semibold"> Update Playlist</h1>
                <UpdatePlaylistForm />
          </div>
        </Modal>
      )}
      <div>
        <button
          onClick={() => showModalHandler()}
          title="Edit playlist"
          className="w-10 h-10 rounded-full transition-colors hover:bg-white/20 flex justify-center items-center"
        >
          <FaEdit color="#eee" size={16} />
        </button>
      </div>
    </>
  );
};

export default UpdatePlaylist;
