import React from "react";
import { cn } from "../utils/cn";
import useSubscribe from "../hooks/useSubscribe";
import { useSelector } from "react-redux";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={cn("py-2 px-4 text-center rounded", className)}
      {...props}
    >
      {children}
    </button>
  );
};

export const SubscribeBtn = ({ children, className, channel, ...props }) => {
  console.log(channel);
  const { mutate, status } = useSubscribe(channel.username);
  return (
    <button
      onClick={() => mutate(channel._id)}
      className={cn(
        " font-Poppins py-3 px-4 text-center rounded transition-colors dark:bg-white/20 text-sm bg-themered-500 inline-flex items-center gap-2 ",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const ChannelBtn = ({ children, className, channel, ...props }) => {
  return (
    <button
      className={cn(
        "font-Poppins py-3 px-4 text-center rounded transition-colors dark:bg-white/20 text-sm bg-themered-500 inline-flex items-center gap-2 ",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
