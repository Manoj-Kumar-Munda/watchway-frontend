import React, { useState } from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

const ToggleBtn = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      onClick={() => setIsOn((prev) => !prev)}
      className={cn(
        "border w-14 rounded-xl px-1 py-1 bg-red-500  flex items-center transition-all duration-300 border-none",
        isOn && "bg-white "
      )}
    >
      <motion.div
        initial={{ x: isOn ? 32 : 0 }}
        animate={{ x: isOn ? 32 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "w-4 h-4 rounded-full bg-white ",
          isOn && "bg-themered-500"
        )}
      ></motion.div>
    </button>
  );
};

export default ToggleBtn;
