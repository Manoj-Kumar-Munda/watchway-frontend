import React from "react";
import pic from "../../assets/virat.png";
import { cn } from "../../utils/cn";
const ProfileCircle = ({ imgSrc = pic, className = "" }) => {
  return (
    <div className={cn("w-8 h-8 rounded-full overflow-hidden object-cover object-center", className)}>
      <img src={pic} alt="Profile" className="w-full h-full" />
    </div>
  );
};

export default ProfileCircle;
