import React, { useRef } from "react";
import Input from "../../Input";
import SubmitButton from "../../../pages/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordValidationSchema } from "../../../utils/formValidations";
import ErrorText from "../../ErrorText";
import useChangePassword from "../../../hooks/Auth/useChangePassword";
import toast, { Toaster } from "react-hot-toast";

const ChnagePasswordForm = () => {
  const { mutate, status, error } = useChangePassword();
  const formRef = useRef();
  if (status === "success") {
    toast.success("Password changed");
    formRef.current.reset();
  }
  const handleUpdatePassword = (data) => {
    mutate(data);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePasswordValidationSchema),
  });
  return (
    <>
      <Toaster />
      <form
        ref={formRef}
        onSubmit={handleSubmit(handleUpdatePassword)}
        className="mx-auto max-w-screen-xs flex flex-col gap-4"
      >
        <div>
          <Input
            label="Old Password"
            type="password"
            name="oldPassword"
            placeholder="Old password"
            {...register("oldPassword")}
          />
          {errors?.oldPassword && (
            <ErrorText>{errors?.oldPassword?.message}</ErrorText>
          )}
        </div>

        <div>
          <Input
            label="New Password"
            type="password"
            placeholder="New password"
            name="newPassword"
            {...register("newPassword")}
          />
          {errors?.newPassword && (
            <ErrorText>{errors?.newPassword?.message}</ErrorText>
          )}
        </div>

        <div>
          <Input
            label="Confirm new Password"
            type="password"
            placeholder="Confirm password"
            name="confPassword"
            {...register("confPassword")}
          />
          {errors?.confPassword && (
            <ErrorText>{errors?.confPassword?.message}</ErrorText>
          )}
        </div>
        {error?.data?.message && <ErrorText>{error?.data?.message}</ErrorText>}

        <SubmitButton>Update</SubmitButton>
      </form>
    </>
  );
};

export default ChnagePasswordForm;
