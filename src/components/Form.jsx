import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "../utils/formValidations";
import Input from "./Input";
import Button from "../pages/Button";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ErrorText from "./ErrorText";
import useLogin from "../hooks/Auth/useLogin";
import { useAuth } from "../context/authContext";

const Form = () => {
  const { mutate, data, status, error } = useLogin();
  const { login, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (status === "success") {
      toast.success("Logged in");
      login(data.data.accessToken, data.data.refreshToken);
      // navigate("/");
    } else if (status === "error") {
      toast.error("Login failed. Please check your credentials.");
      logout();
    }
  }, [data, status]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });

  const submitHandler = (data) => {
    mutate(data);
  };

  const loginAsGuest = () => {
    mutate({
      userId: process.env.GUEST_USER_ID,
      password: process.env.GUEST_PASSWORD,
    });
  };
  return (
    <>
      <Toaster />
      <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
        <div>
          <Input
            label="Username or Email"
            type="text"
            placeholder="Enter username or email"
            {...register("userId")}
          />
          {errors.userId && <ErrorText>{errors.userId.message}</ErrorText>}
        </div>

        <div>
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        </div>

        {error && error?.data && (
          <ErrorText className="text-sm">{error.data.message}</ErrorText>
        )}

        <Button type="submit" className="mt-4">
          Submit
        </Button>

        <Button
          onClick={loginAsGuest}
          className="bg-stone-700 hover:bg-stone-600"
        >
          Login as Guest
        </Button>
      </form>
    </>
  );
};

export default Form;
