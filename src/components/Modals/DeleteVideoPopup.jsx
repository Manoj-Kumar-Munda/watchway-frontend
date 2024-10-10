import React, { useEffect } from "react";
import useDeleteVideo from "../../hooks/useDeleteVideo";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/modalsSlice";
import toast, { Toaster } from "react-hot-toast";

const DeleteVideoPopup = ({ videoId }) => {
  const { mutate, status } = useDeleteVideo();
  const dispatch = useDispatch();

  console.log(videoId);
  

  const deleteVideo = () => {
    mutate(videoId);
  };

  useEffect(() => {
    let timeout;
    if (status === "success") {
      toast.success("Video deleted");
      timeout = setTimeout(() => {
        dispatch(closeModal("deleteVideo"));
      });
    }

    return () => clearTimeout(timeout);
  }, [status]);

  return (
    <div className="bg-white/10  text-center backdrop-blur-xl py-2 rounded-xl max-w-screen-xs w-full mx-auto">
      <Toaster />
      <h1 className="text-white text-2xl font-bold font-Poppins">Delete</h1>

      <div className="my-3 space-y-3">
        <p>Are you sure you want to delete this video?</p>
        <div className="flex justify-center ">
          <div className="flex gap-4 items-center">
            <button
              onClick={() => dispatch(closeModal("deleteVideo"))}
              className="text-primary-dark bg-white rounded-md py-1.5 px-6"
            >
              Cancel
            </button>
            <button
              onClick={deleteVideo}
              className=" text-white px-6 py-1.5 bg-themered-500 rounded-md"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DeleteVideoPopup);
