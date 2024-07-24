import React from "react";
import { cn } from "../../utils/cn";

const NoData = ({ message = "", className = "", children }) => {
  return (
    <div className={cn("flex flex-col justify-center items-center", className)}>
      {children}
      <p>{message}</p>
    </div>
  );
};

export default NoData;
