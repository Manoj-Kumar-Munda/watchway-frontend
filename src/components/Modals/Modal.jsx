import React from "react";
import { useSelector } from "react-redux";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ modalId, children }) => {
  const isOpen = useSelector((store) => store.modals[modalId]);
  return (
    <div
      className={cn(
        "invisible fixed inset-0 bg-black/60 z-50 flex justify-center items-center",
        isOpen && "visible"
      )}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-full flex justify-center"
        
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Modal;
