import React from "react";
import { cn } from "../utils/cn";

const LoadingSpinner = ({ className =""}) => {
  return (
    <div className={cn("absolute bg-gray-800/30 inset-0 z-50 flex items-center justify-center", className)}>
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-white"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
