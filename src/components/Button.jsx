import React from "react";
import { cn } from "../utils/cn";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button className={cn("py-2 px-4 text-center rounded", className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
