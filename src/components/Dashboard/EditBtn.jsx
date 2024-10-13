import React, { useEffect, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import Modal from "../Modals/Modal";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/slices/modalsSlice";
import EditVideoModal from "../Modals/EditVideoModal";

const EditBtn = ({ videoId }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Modal modalId={"editVideo"} className={"max-w-screen-sm w-full"}>
        <EditVideoModal />
      </Modal>

      <button
        onClick={() => dispatch(openModal("editVideo"))}
        className="rounded-full transition-all hover:bg-themered-500 w-8 h-8 flex justify-center items-center"
      >
        <MdEdit />
      </button>
    </>
  );
};

export default React.memo(EditBtn);
