import React, { useId } from "react";
import { cn } from "../utils/cn";

const Textarea = React.forwardRef(
  ({ defaultValue = "", label = "", rows = 3, className, ...props }, ref) => {
    const id = useId();
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={id}>{label}</label>
        <textarea
          id={id}
          rows={rows}
          className={cn(
            "rounded-lg bg-white dark:bg-slate-100 text-sm resize-none  p-1 text-black outline-none  duration-200 border-none w-full placeholder:text-primary-dark/60 placeholder:text-sm",
            className
          )}
          defaultValue={defaultValue}
          {...props}
          ref={ref}
        />
      </div>
    );
  }
);

export default Textarea;
