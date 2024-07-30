import React from "react";
import { useSelector } from "react-redux";
import { cn } from "../../utils/cn";

const Modal = ({ modalId, children }) => {
  const isOpen = useSelector((store) => store.modals[modalId]);
  return (
    <div
      className={cn(
        "invisible fixed inset-0 bg-black/60 z-50 flex justify-center items-center",
        isOpen && "visible"
      )}
    >
      {children}
    </div>
  );
};

export default Modal;
