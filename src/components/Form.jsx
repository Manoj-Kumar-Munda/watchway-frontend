import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "../utils/formValidations";
import Input from "./Input";
import Button from "../pages/Button";
import useLogin from "../hooks/useLogin";

const Form = () => {
  const { mutate, isError, isPending, error, data } = useLogin();

  if (isPending) {
    console.log("pending...");
  }

  if (isError) {
    console.log("error: ", error);
  }

  console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });

  const submitHandler = (data) => {
    console.log(data);
    mutate(data);
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
      <Input
        label="Username or Email"
        type="text"
        placeholder="Enter username or email"
        {...register("userId")}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        {...register("password")}
      />

      <Button type="submit" className="mt-4">
        Submit
      </Button>
    </form>
  );
};

export default Form;
