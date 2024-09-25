import React from "react";
import { useForm } from "react-hook-form";
import { updatePersonalInfoValidation } from "../../../utils/formValidations";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../Input";
import { useSelector } from "react-redux";
import ErrorText from "../../ErrorText";
import SubmitButton from "../../../pages/Button";
import useUpdateProfile from "../../../hooks/useUpdateProfile";
import toast, { Toaster } from "react-hot-toast";

const UpdateProfileForm = () => {
  const { user } = useSelector((store) => store.auth);
  const { mutate, status } = useUpdateProfile();

  if (status === "success") toast.success("Profile updated");
  if (status === "error") toast.error("Failed to update");
  const handleUpdate = (data) => {
    mutate(data);
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updatePersonalInfoValidation),
  });
  return (
    <>
      <Toaster />
      <form
        onSubmit={handleSubmit(handleUpdate)}
        className="mx-auto max-w-screen-xs flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <Input
            label="Fullname"
            {...register("fullName")}
            defaultValue={user?.fullName}
          />
          {errors?.fullName && (
            <ErrorText>{errors?.fullName?.message}</ErrorText>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Input
            label="Email"
            {...register("email")}
            defaultValue={user?.email}
          />
          {errors?.fullName && <ErrorText>{errors?.email?.message}</ErrorText>}
        </div>

        <SubmitButton>Update</SubmitButton>
      </form>
    </>
  );
};

export default UpdateProfileForm;
