import React, { useState } from "react";
import Dropzone from "react-dropzone";
import Button from "../Button";
import Input from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { uploadFormValidation } from "../../utils/formValidations";
import { bytesToMegabytes } from "../../utils/helpers";
import UploadingVideoModalPopup from "./UploadingVideoModalPopup";

const UploadVideoModal = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadingVideoData, setuploadingVideoData] = useState();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(uploadFormValidation) });

  const submitHandler = (data, e) => {
    console.log(data);
    const formData = new FormData(e.target);
    formData.append("video", data.video);
    setIsUploading(true);
    setuploadingVideoData(data)
  };

  return (
    <>
      {isUploading ? (
        <UploadingVideoModalPopup data={uploadingVideoData}  />
      ) : (
        <div className="bg-white max-w-screen-sm w-full rounded-md py-3 space-y-2 px-4">
          <div className="">
            <h1 className="font-semibold text-lg font-Poppins">
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
          maxFiles={1}
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
              <input {...getInputProps()} onBlur={onBlur} {...props} />

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
