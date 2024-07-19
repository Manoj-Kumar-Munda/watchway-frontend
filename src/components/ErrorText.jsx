import React from "react";
import { cn } from "../utils/cn";

const ErrorText = ({ children, className = "" }) => {
  return (
    <p
      className={cn(
        "text-xs text-red-400 pl-2 font-Roboto font-medium lowercase",
        className
      )}
    >
      {children}
    </p>
  );
};

export default ErrorText;
