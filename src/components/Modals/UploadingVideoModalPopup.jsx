import React from "react";
import { FaPhotoVideo } from "react-icons/fa";
import UploadLoader from "../Loaders/UploadLoader";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/modalsSlice";
import { bytesToMegabytes } from "../../utils/helpers";
const UploadingVideoModalPopup = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="relative text-black bg-white/40 backdrop-blur-2xl font-Poppins max-w-lg w-full px-4 py-4 rounded-md ">
      <button
        className="absolute right-2 top-2"
        onClick={() => dispatch(closeModal("upload"))}
      >
        <RxCross2 size={18} />
      </button>
      <h2 className="font-semibold">Uploading Video...</h2>
      <p className="text-sm font-medium">Track your video uploading process.</p>

      <div className="my-2 border border-black flex px-2 py-2  gap-2 ">
        <div>
          <FaPhotoVideo size={24} />
        </div>

        <div className="flex flex-col gap-2">
          <span className="block text-base">
            {data?.video[0]?.path} - {bytesToMegabytes(data?.video[0]?.size)}
          </span>
          <UploadLoader text={"Uploading"} />
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
