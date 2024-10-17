import React, { useEffect, useState } from "react";
import Input from "../Input";
import useUpdateCover from "../../hooks/useUpdateCover";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/modalsSlice";

const UpdateCoverModal = () => {
  const [image, setImage] = useState();
  const { mutate, status, data } = useUpdateCover();
  const dispatch = useDispatch();

  useEffect(() => {
    let timer;
    if (status === "success") {
      toast.success(data?.message);
      timer = setTimeout(() => dispatch(closeModal("updateCover")), 1000);
    }

    return () => clearTimeout(timer)
  }, [status]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!image) return;
    const formData = new FormData();
    formData.append("coverImage", image);
    mutate(formData);
  };

  return (
    <>
      <Toaster />
      <div className="bg-white/20 backdrop-blur-lg p-3 rounded-lg">
        <h1 className="text-lg font-semibold font-Poppins">
          Update Background
        </h1>
        <form
          encType="multipart/form-data"
          onSubmit={submitHandler}
          className="flex flex-col items-center gap-4"
        >
          <div className="mt-4 w-full">
            <Input
              onChange={handleImageChange}
              name="coverImage"
              type="file"
              label="Choose a picture"
              className=""
            />
          </div>

          <button className="border px-4 py-2 text-sm rounded-md bg-primary-dark border-white/30 hover:bg-primary-dark/60 transition">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateCoverModal;
