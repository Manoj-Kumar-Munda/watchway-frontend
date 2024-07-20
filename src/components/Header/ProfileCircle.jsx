import React from "react";
import { cn } from "../../utils/cn";
const ProfileCircle = ({ imgSrc = "", className = "" }) => {
  return (
    <div className={cn("w-8 h-8 rounded-full overflow-hidden object-cover object-center", className)}>
      <img src={imgSrc} alt="Profile" className="w-full h-full" />
    </div>
  );
};

export default ProfileCircle;
