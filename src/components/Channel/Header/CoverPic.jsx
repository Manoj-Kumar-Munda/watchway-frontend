import React from "react";
import { cn } from "../../../utils/cn";

const CoverPic = ({ cover }) => {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <div
        className={cn(
          "w-full bg-black h-[30svh]",
          !cover && "flex items-center justify-center"
        )}
      >
        {cover ? (
          <img className="w-full h-full object-cover object-center" src={cover} alt="" />
        ) : (
         <h1 className="text-white">Upload cover image</h1>
        )}
      </div>
    </div>
  );
};

export default CoverPic;
