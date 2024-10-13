import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { editVideoFormValidation } from "../../utils/formValidations";
const EditVideoForm = ({ video }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editVideoFormValidation),
  });

  console.log(video);
  

  return (
    <div className="max-w-screen-xs mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
        <Input
          defaultValue={video?.title}
          label={"Change title"}
          {...register("title")}
        />
        <Input
          defaultValue={video?.description}
          label={"Change description"}
          {...register("description")}
        />
        <button className="py-2 bg-black transition-all">Change</button>
      </form>
    </div>
  );
};

export default EditVideoForm;
