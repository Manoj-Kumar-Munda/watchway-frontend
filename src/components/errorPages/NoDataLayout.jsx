import React from "react";

const NoDataLayout = ({ children }) => {
  return (
    <div className="min-h-48 flex flex-col justify-center items-center gap-2">
      {children}
    </div>
  );
};

export default NoDataLayout;
