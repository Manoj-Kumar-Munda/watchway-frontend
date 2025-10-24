import React from "react";
import { cn } from "../utils/cn";

const SubmitButton = ({ children, className = "" }) => {
  return (
    <button
      className={cn(
        "text-center w-full border py-2 bg-themered-500 hover:bg-themered-400 transition font-Poppins text-sm rounded-lg border-white/20 text-white",
        className
      )}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
