import React from "react";
import { cn } from "../../../utils/cn";
import { MdModeEdit } from "react-icons/md";
import Modal from "../../Modals/Modal";
import { useDispatch } from "react-redux";
import { openModal } from "../../../store/slices/modalsSlice";
import UpdateCoverModal from "../../Modals/UpdateCoverModal";

const CoverPic = ({ cover }) => {
  const dispatch = useDispatch();
  return (
    <div className="relative rounded-xl overflow-hidden">
      <Modal className={"max-w-screen-sm"} modalId={"updateCover"}>
        <UpdateCoverModal />
      </Modal>
      <div
        className={cn(
          "w-full bg-black h-[30svh]",
          !cover && "flex items-center justify-center"
        )}
      >
        {cover ? (
          <div className="relative">
            <div className="absolute inset-0 hover:bg-black/40 transition group">
              <button
                onClick={() => dispatch(openModal("updateCover"))}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition w-10 h-10 hover:bg-white/10 rounded-full grid place-content-center"
              >
                <MdModeEdit />
              </button>
            </div>
            <img
              className="w-full h-full object-cover object-center"
              src={cover}
              alt=""
            />
          </div>
        ) : (
          <h1 className="text-white">Upload cover image</h1>
        )}
      </div>
    </div>
  );
};

export default CoverPic;
