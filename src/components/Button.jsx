import React from "react";
import { cn } from "../utils/cn";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={cn("py-2 px-4 text-center rounded", className)}
      {...props}
    >
      {children}
    </button>
  );
};

export const ChannelBtn = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "py-2 px-4 text-center rounded bg-themered-500 inline-flex items-center gap-2 w-24 relative before:content-[''] before:absolute before:w-full before:h-full before:bg-themered-300 before:rounded before:-z-10 before:left-1.5 before:-bottom-1.5 "
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
