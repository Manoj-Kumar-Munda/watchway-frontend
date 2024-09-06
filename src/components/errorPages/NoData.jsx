import React from "react";
import { cn } from "../../utils/cn";

const NoData = ({ message = "", className = "", imgSrc = "" }) => {
  return (
    <div className={cn("min-h-48 flex flex-col gap-1 justify-center items-center border dark:border-white/10 rounded-lg ", className)}>
      <div>
        <img src={imgSrc} className="w-32 h-auto" />
      </div>
      <p className="error-text">{message}</p>
    </div>
  );
};

export default NoData;
