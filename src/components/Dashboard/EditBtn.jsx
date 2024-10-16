import React from "react";
import { MdEdit } from "react-icons/md";
import Modal from "../Modals/Modal";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/slices/modalsSlice";
import EditVideoModal from "../Modals/EditVideoModal";
import { setCurrentVideo } from "../../store/slices/videoSlice";

const EditBtn = ({ videoId }) => {
  const dispatch = useDispatch();

  const editHandler = () => {
    dispatch(openModal("editVideo"));
    dispatch(setCurrentVideo(videoId));
  };

  return (
    <>
      <Modal modalId={"editVideo"} className={"max-w-screen-sm w-full"}>
        <EditVideoModal />
      </Modal>

      <button
        onClick={editHandler}
        className="rounded-full transition-all hover:bg-themered-500 w-8 h-8 flex justify-center items-center"
      >
        <MdEdit />
      </button>
    </>
  );
};

export default React.memo(EditBtn);
