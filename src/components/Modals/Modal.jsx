import React from "react";
import { useSelector } from "react-redux";
import { cn } from "../../utils/cn";

const Modal = ({ modalId, children }) => {
  console.log("modalId: ", modalId);
  const isOpen = useSelector((store) => store.modals[modalId]);
  console.log(isOpen);
  return (
    <div
      className={cn(
        "invisible fixed inset-0 bg-black/40 z-50 flex justify-center items-center",
        isOpen && "visible"
      )}
    >
      {children}
    </div>
  );
};

export default Modal;
