import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { closeModal } from "../../store/slices/modalsSlice";

const Modal = ({ modalId, children, className }) => {
  const isOpen = useSelector((store) => store.modals[modalId]);
  const modalRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = (event) => {
      if (!modalRef.current || modalRef.current.contains(event.target)) {
        return;
      }

      if (!modalRef.current.contains(event.target)) {
        dispatch(closeModal(modalId));
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  return (
    <div
      className={cn(
        "invisible fixed inset-0 bg-black/60 z-50 flex justify-center  items-center ",
        isOpen && "visible"
      )}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={cn(" w-full px-2", className)}
            ref={modalRef}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Modal;
