import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

const DeleteBtn = ({ videoId }) => {
  return (
    <button className="rounded-full transition-all hover:bg-themered-500 w-8 h-8 flex justify-center items-center">
      <RiDeleteBin6Fill />
    </button>
  );
};

export default DeleteBtn;
