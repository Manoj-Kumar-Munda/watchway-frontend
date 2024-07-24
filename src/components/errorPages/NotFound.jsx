import React from "react";
import NotFoundSvg from "../../assets/svg/not-found.svg";
import { cn } from "../../utils/cn";

const NotFound = ({ errorMsg, classname = "" }) => {
  return (
    <div className={cn("flex flex-col justify-center items-center ", classname)}>
      <div>
        <img src={NotFoundSvg} className="w-32 h-auto" />
      </div>

      <p className="error-text">{errorMsg}</p>
    </div>
  );
};

export default NotFound;
