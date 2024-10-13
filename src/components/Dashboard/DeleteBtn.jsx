import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Modal from "../Modals/Modal";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/slices/modalsSlice";
import DeleteVideoPopup from "../Modals/DeleteVideoPopup";

const DeleteBtn = ({ videoId }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Modal modalId={"deleteVideo"} className={"max-w-screen-sm w-full"}>
        <DeleteVideoPopup videoId={videoId} />
      </Modal>

      <button
        onClick={() => dispatch(openModal("deleteVideo"))}
        className="rounded-full transition-all hover:bg-themered-500 w-8 h-8 flex justify-center items-center"
      >
        <RiDeleteBin6Fill />
      </button>
    </>
  );
};

export default React.memo(DeleteBtn);
