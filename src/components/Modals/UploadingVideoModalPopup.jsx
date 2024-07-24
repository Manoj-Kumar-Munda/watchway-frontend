import React from "react";
import { FaPhotoVideo } from "react-icons/fa";
import UploadLoader from "../Loaders/UploadLoader";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/modalsSlice";
const UploadingVideoModalPopup = ({ videoTitle }) => {
  const dispatch = useDispatch();
  return (
    <div className="relative bg-white font-Poppins max-w-lg w-full px-4 py-4 rounded-md ">
      <button
        className="absolute right-2 top-2"
        onClick={() => dispatch(closeModal("upload"))}
      >
        <RxCross2 size={18} />
      </button>
      <h2 className="font-semibold">Uploading Video...</h2>
      <p className="text-sm font-medium">Track your video uploading process.</p>

      <div className="my-2 border border-black flex px-2  gap-2 ">
        <div>
          <FaPhotoVideo size={24} />
        </div>

        <div className="flex flex-col ">
          <div>
            <span className="block">Dashboard prototype recoring.mp4</span>
            <span>16MB</span>
          </div>
          <div className="flex gap-2">
            <UploadLoader text={"Uploading"} />
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-3">
        <button className="w-full text-white bg-gray-700 py-1.5 rounded-sm">
          Cancel
        </button>
        <button className="w-full bg-themered-500 text-white py-2 rounded-sm">
          Finish
        </button>
      </div>
    </div>
  );
};

export default UploadingVideoModalPopup;
