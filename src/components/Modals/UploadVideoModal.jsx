import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import Button from "../Button";
import Input from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { uploadFormValidation } from "../../utils/formValidations";
import { bytesToMegabytes } from "../../utils/helpers";
import UploadingVideoModalPopup from "./UploadingVideoModalPopup";
import useUpload from "../../hooks/useUpload";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/modalsSlice";
import { setUploadStatus } from "../../store/slices/appSlice";
import CloseModalBtn from "./CloseModalBtn";

const UploadVideoModal = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadingVideoData, setuploadingVideoData] = useState();
  const { data, status, mutate, error } = useUpload();
  const dispatch = useDispatch();

  if (status === "success" || status === "error") {
    dispatch(closeModal("upload"));
    dispatch(setUploadStatus(status));
  }

  useEffect(() => {
    let timer;
    if (status === "success") {
      timer = setTimeout(() => {
        dispatch(closeModal("upload"));
      }, 2200);
    }
    return () => clearTimeout(timer);
  }, [status]);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(uploadFormValidation) });

  const submitHandler = (data, e) => {
    const formData = new FormData(e.target);
    formData.append("video", data.video[0]);
    mutate(formData);
    setIsUploading(true);
    setuploadingVideoData(data);
  };
  return (
    <>
      <Toaster position="top-center" containerStyle={{ background: "transparent"}} />
      {isUploading ? (
        <UploadingVideoModalPopup data={uploadingVideoData} />
      ) : (
        <div className="bg-white dark:text-black dark:bg-white/40 dark:backdrop-blur-2xl max-w-screen-sm w-full rounded-md py-3 space-y-2 px-4 relative">
          <CloseModalBtn
            handleClose={() => {
              dispatch(closeModal("upload"));
            }}
          />
          <div className="">
            <h1 className="font-semibold dark:text-black text-lg font-Poppins bg-transparent">
              Upload Videos
            </h1>
          </div>
          <form className="" onSubmit={handleSubmit(submitHandler)}>
            <div className="mt-6 space-y-2">
              <FileInput
                control={control}
                name="video"
                {...register("video")}
              />

              <Input
                type="file"
                label="Thumbnail"
                required={true}
                accept={"image/*"}
                {...register("thumbnail")}
                error={errors?.thumbnail?.message}
              />
              <Input
                label="Title"
                required={true}
                {...register("title")}
                error={errors?.title?.message}
              />
              <Input
                label="Description"
                required={true}
                {...register("description")}
                error={errors?.description?.message}
              />
            </div>
            <div className="flex justify-center mt-4">
              <Button className="bg-themered-500 text-white px-8" type="submit">
                <span className="font-medium">Upload</span>
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

const FileInput = React.forwardRef(({ control, name, props }, ref) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <Dropzone
          onDrop={onChange}
          accept={{
            "video/*": [".mp4", ".mkv"],
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className={
                " text-center h-44 flex items-center justify-center border-dashed border-2  border-black"
              }
            >
              <input
                type="file"
                {...getInputProps()}
                onBlur={onBlur}
                {...props}
              />

              {!value || value?.length === 0 ? (
                <p>Drag 'n' drop your file here, or click to select files</p>
              ) : (
                value?.map((file) => (
                  <div key={file.path}>
                    {file.path} - {bytesToMegabytes(file.size)}
                  </div>
                ))
              )}
            </div>
          )}
        </Dropzone>
      )}
    />
  );
});

export default UploadVideoModal;
