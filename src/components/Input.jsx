import React, { useId } from "react";
import { twMerge } from "tailwind-merge";
import ErrorText from "./ErrorText";

const Input = React.forwardRef(
  (
    {
      label = "",
      type = "text",
      required,
      error = "",
      className = "",
      ...props
    },
    ref
  ) => {
    const id = useId();
    return (
      <div className="w-full">
        {label && (
          <>
            <label
              className="dark:text-white inline-block mb-1 pl-1 font-Poppins text-sm  text-gray-500"
              htmlFor={id}
            >
              {label}
            </label>
            {required && <span className="text-red-500">*</span>}
          </>
        )}
        <input
          type={type}
          className={twMerge(
            "px-3 py-2 rounded-lg dark:bg-white/60  bg-white text-black outline-none focus:ring-2 focus:ring-gray-700 focus:bg-gray-50 duration-200 border border-gray-200 w-full",
            className
          )}
          ref={ref}
          {...props}
          id={id}
        />
        {error && <ErrorText className="py-1">{error}</ErrorText>}
      </div>
    );
  }
);

export default Input;
