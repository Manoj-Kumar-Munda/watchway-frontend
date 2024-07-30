import React, { useEffect, useState } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import { IoCloudUploadOutline } from "react-icons/io5";
import { bytesToMegabytes } from "../../utils/helpers";
import { ChannelBtn } from "../Button";
import Input from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { uploadFormValidation } from "../../utils/formValidations";

const UploadVideoModal = () => {
 
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(uploadFormValidation) });

  const submitHandler = (data) => {
    console.log("data: ", data);
  
  };


  console.log("errors: ", errors);
  return (
    <div className="bg-white max-w-screen-sm w-full rounded-md py-3 space-y-2 px-4">
      <div className="">
        <h1 className="font-semibold text-lg font-Poppins">Upload Videos</h1>
      </div>
      <form className="" onSubmit={handleSubmit(submitHandler)}>
        <div className="mt-6 space-y-2">
          <FileInput control={control} name="video" {...register("video")} />

          <Input
            type="file"
            label="Thumbnail"
            required={true}
            {...register("thumbnail")}
          />
          <Input label="Title" required={true} {...register("title")} />
          <Input
            label="Description"
            required={true}
            {...register("description")}
          />
        </div>
        <button className="" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const FileInput = ({ control, name, props }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <Dropzone onDrop={onChange} maxFiles={1} >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className={
                " text-center h-44 flex items-center justify-center border-dashed border-2  border-black"
              }
            >
              <input {...getInputProps()} onBlur={onBlur} {...props}  />

              {!value || value?.length === 0 ? (
                <p>Drag 'n' drop your file here, or click to select files</p>
              ) : (
                value?.map((file) => <div key={file.path}>{file.path}</div>)
              )}
            </div>
          )}
        </Dropzone>
      )}
    />
  );
};

export default UploadVideoModal;
