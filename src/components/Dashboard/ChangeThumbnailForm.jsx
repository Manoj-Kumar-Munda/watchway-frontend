import React, { useEffect, useState } from "react";
import Input from "../Input";
import { useDispatch, useSelector } from "react-redux";
import useUpdateThumbnail from "../../hooks/useUpdateThumbnail";
import { closeModal } from "../../store/slices/modalsSlice";

const ChangeThumbnailForm = () => {
  const id = useSelector((store) => store.video.id);
  const [newThumbnail, setNewThumbnail] = useState();
  const [preview, setPreview] = useState();
  const { mutate, status } = useUpdateThumbnail();
  const dispatch = useDispatch();

  useEffect(() => {
    let objectUrl;
    if (newThumbnail) {
      objectUrl = URL.createObjectURL(newThumbnail);
      setPreview(objectUrl);
    }
    return () => URL.revokeObjectURL(objectUrl);
  }, [newThumbnail]);

  useEffect(() => {
    let timeout;
    if (status === "success") {
      timeout = setTimeout(() => {
        dispatch(closeModal("editVideo"));
      }, 700);
    }
    return () => clearTimeout(timeout);
  }, [status]);

  const onChangeHandler = (e) => {
    setNewThumbnail(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("thumbnail", newThumbnail);
    if (newThumbnail) {
      mutate({ id, data: formData });
    }
  };

  return (
    <div className="pt-4 max-w-screen-xs mx-auto">
      <form
        encType="multipart/form-data"
        onSubmit={submitHandler}
        className="flex flex-col gap-4 mb-6"
      >
        <Input onChange={onChangeHandler} label="New thumbnail" type="file" />
        <button className="py-2 bg-black transition-all">
          {status === "success" ? <span>Updated</span> : <span>Change</span>}
        </button>
      </form>
      {preview && (
        <div className="aspect-video w-24 rounded-md overflow-hidden">
          <img className="w-full object-cover" src={preview} />
        </div>
      )}
    </div>
  );
};

export default ChangeThumbnailForm;
