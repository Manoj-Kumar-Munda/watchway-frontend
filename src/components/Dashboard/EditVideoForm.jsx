import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { editVideoFormValidation } from "../../utils/formValidations";
import { useDispatch, useSelector } from "react-redux";
import useVideoInfo from "../../hooks/useVideoInfo";
import Textarea from "../Textarea";
import useUpdateVideo from "../../hooks/useUpdateVideo";
import { cn } from "../../utils/cn";
import { closeModal } from "../../store/slices/modalsSlice";

const EditVideoForm = () => {
  const id = useSelector((store) => store.video.id);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editVideoFormValidation),
  });
  const { data } = useVideoInfo(id);
  const { mutate, status } = useUpdateVideo();

  useEffect(() => {
    let timeout;
    if (status === "success") {
      timeout = setTimeout(() => {
        dispatch(closeModal("editVideo"));
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [status]);

  const submitHandler = (data) => {
    mutate({
      id,
      data,
    });
  };
  return (
    <div className="max-w-screen-xs mx-auto">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-4 mb-6"
      >
        <Input
          defaultValue={data && data?.data[0]?.title}
          label={"Change title"}
          {...register("title")}
          autoFocus={true}
        />
        <Textarea
          defaultValue={data && data?.data[0]?.description}
          label={"Change description"}
          {...register("description")}
        />
        <button className={cn("py-2 bg-black transition-all")}>
          {status === "success" ? <span>Updated</span> : <span>Change</span>}
        </button>
      </form>
    </div>
  );
};

export default EditVideoForm;
