import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Modal from "../Modals/Modal";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/slices/modalsSlice";
import DeleteVideoPopup from "../Modals/DeleteVideoPopup";

const DeleteBtn = ({ videoId }) => {
  const dispatch = useDispatch();

  const deleteBtnHandler = () => {
    dispatch(openModal("deleteVideo"));
    dispatch(setCurrentVideo(videoId));
  };
  return (
    <>
      <Modal modalId={"deleteVideo"} className={"max-w-screen-sm w-full"}>
        <DeleteVideoPopup />
      </Modal>

      <button
        onClick={deleteBtnHandler}
        className="rounded-full transition-all hover:bg-themered-500 w-8 h-8 flex justify-center items-center"
      >
        <RiDeleteBin6Fill />
      </button>
    </>
  );
};

export default React.memo(DeleteBtn);
