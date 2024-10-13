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
      defaultValue="",
      ...props
    },
    ref
  ) => {
    const id = useId();
    return (
      <div className="min-w-0 w-full">
        {label && (
          <>
            <label
              className="dark:text-white block mb-1 pl-1 font-Poppins text-sm  text-gray-500"
              htmlFor={id}
            >
              {label}
            </label>
            {required && <span className="text-red-500">*</span>}
          </>
        )}
        <input
          defaultValue={defaultValue}
          type={type}
          className={twMerge(
            "px-3 py-2 rounded-lg bg-white dark:bg-slate-100 text-black outline-none  duration-200 border border-gray-200 w-full placeholder:text-primary-dark/60 placeholder:text-sm",
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
