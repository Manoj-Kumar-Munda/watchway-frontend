import React from "react";
import { ImCross } from "react-icons/im";

const CloseModalBtn = ({ handleClose }) => {
  return (
    <button className="absolute top-2 right-2" onClick={() => handleClose()}>
      <ImCross />
    </button>
  );
};

export default CloseModalBtn;
