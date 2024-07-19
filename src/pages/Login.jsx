import React from "react";

import Form from "../components/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="  w-full flex justify-center items-start py-4 md:py-[8%]">
      <div className="max-w-xl w-full space-y-2 md:space-y-4 px-2 md:px-4 lg:px-6 py-6 rounded-lg ">
        <h1 className="font-Poppins text-3xl font-bold text-start">
          Login<span className="text-red-500 text-3xl">.</span>
        </h1>
        <Form type="login" />

        <div className="">
          <span className="font-Roboto">
            Don't have an account?{" "}
            <Link className="underline" to={"/register"}>
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
