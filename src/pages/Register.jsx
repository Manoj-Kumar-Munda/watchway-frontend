import React from "react";
import SignupForm from "../components/SignupForm";
import { Link } from "react-router-dom";

const Register = () => {
  
  return (
    <div className="  w-full flex justify-center items-start">
      <div className="max-w-xl w-full space-y-2 md:space-y-4 px-2 md:px-4 lg:px-6 md:py-4 rounded-lg ">
        <h1 className="font-Poppins text-3xl font-bold text-start">
          Register<span className="text-red-500 text-3xl">.</span>
        </h1>
        <SignupForm />

        <div className="">
          <span className="font-Roboto">
            Already have an account?
            <Link className="underline" to={"/login"}>
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
