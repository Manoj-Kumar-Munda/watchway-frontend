import React from "react";

const StatusContainer = ({ children }) => {
  return <div className="absolute inset-0 flex justify-center items-center">{children}</div>;
};

export default StatusContainer;
