import React from "react";
import { cn } from "../utils/cn";
import useSubscribe from "../hooks/useSubscribe";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={cn(
        "py-2 px-4 text-center rounded border border-white/10",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const SubscribeBtn = ({ children, className, channelId, ...props }) => {
  const { mutate } = useSubscribe(channelId);
  return (
    <button
      onClick={() => mutate(channelId)}
      className={cn(
        " bg-white text-black rounded-full px-3 text-xs font-medium py-1.5",
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
        "border border-white/10 font-Poppins py-2 px-4 text-center rounded transition-colors dark:bg-white/10 text-sm bg-themered-500 inline-flex items-center gap-2 ",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
