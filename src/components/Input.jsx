import React, { useId } from "react";
import { twMerge } from "tailwind-merge";

const Input = React.forwardRef(
  ({ label = "", type = "text", className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div className="w-full">
        {label && (
          <label
            className="inline-block mb-1 pl-1 font-Poppins text-sm  text-gray-500"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          className={twMerge(
            "px-3 py-2 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-gray-700 focus:bg-gray-50 duration-200 border border-gray-200 w-full",
            className
          )}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    );
  }
);

export default Input;
