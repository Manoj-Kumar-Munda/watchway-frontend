import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "../utils/formValidations";
import Input from "./Input";
import Button from "../pages/Button";

const Form = ({ type = "login" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });
  return (
    <form className="space-y-4">
      <Input
        label="Username or email"
        type="text"
        placeholder="Enter username or email"
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
      />

      <Button type="submit" className="mt-4">
        Submit
      </Button>

      
    </form>
  );
};

export default Form;
