import React from "react";
import { cn } from "../../../utils/cn";
import { useSelector } from "react-redux";

const VerticalVideoCardContainer = ({ children }) => {
  const { isAuthorized } = useSelector((store) => store.channel);
  return (
    <div className="flex justify-center md:block">
      <div
        class={cn(
          "grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-4 gap-y-8 pt-2",
          isAuthorized && "grid-cols-[repeat(auto-fit,minmax(320px,1fr))]"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default VerticalVideoCardContainer;
