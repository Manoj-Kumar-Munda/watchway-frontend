import React from "react";
import { cn } from "../../../utils/cn";
import { useSelector } from "react-redux";

const VerticalVideoCardContainer = ({ children }) => {
  const { isAuthorized } = useSelector((store) => store.channel);
  return (
    <div className="flex justify-center">

      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2"
        )}
      >
       {children}
      </div>
    </div>
  );
};

export default VerticalVideoCardContainer;
