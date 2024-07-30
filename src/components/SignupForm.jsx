import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { registerValidation } from "../utils/formValidations";
import Input from "./Input";
import Button from "../pages/Button";
import { cn } from "../utils/cn";
import ErrorText from "./ErrorText";
import useRegister from "../hooks/Auth/useRegister";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const SignupForm = () => {
  const navigate = useNavigate();
  const { mutate, status, data } = useRegister();

  useEffect(() => {
    let timer;
    if (data && data?.data) {
      toast.success("Signed up..");

      timer = setTimeout(() => {
        navigate("/login");
      }, 2200);
    }

    return () => clearTimeout(timer);
  }, [data]);

  const submitHandler = (data) => {
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("avatar", data.avatar[0]);
    formData.append("coverImage", data?.coverImage[0] || null);
    mutate(formData);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerValidation) });

  return (
    <>
      <Toaster />
      <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
        <div className="">
          <Input
            label="Full name"
            type="text"
            placeholder="Enter your name"
            {...register("fullName")}
            required={true}
          />
          {errors.fullName && <ErrorText>{errors.fullName.message}</ErrorText>}
        </div>

        <div>
          <Input
            label="Username"
            type="text"
            placeholder="Pick a username"
            {...register("username")}
            required={true}
          />
          {errors.username && <ErrorText>{errors.username.message}</ErrorText>}
        </div>

        <div>
          <Input
            label="Email"
            type="text"
            placeholder="Enter your email"
            {...register("email")}
            required={true}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </div>

        <div>
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
            required={true}
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        </div>

        <div className="space-y-2 sm:space-y-0 sm:flex gap-2">
          <Input
            label="Upload your avatar"
            type="file"
            required={true}
            name="avatar"
            className={cn(errors.avatar && "error-input")}
            accept="image/png,image/jpg,image/jpeg,image/gif"
            {...register("avatar")}
          />

          <Input
            label="Upload cover photo"
            type="file"
            name="coverImage"
            {...register("coverImage")}
          />
        </div>

        {data && data?.response && (
          <ErrorText className="text-sm">
            {data.response.data.message}
          </ErrorText>
        )}

        <Button
          type="submit"
          className={cn("mt-4 bg-black", status === "pending" && "bg-black/70")}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default SignupForm;
