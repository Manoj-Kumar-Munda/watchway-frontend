import React, { useEffect, useRef, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { cn } from "../../utils/cn";
import EditVideoForm from "../Dashboard/EditVideoForm";
import ChangeThumbnailForm from "../Dashboard/ChangeThumbnailForm";

const tabs = ["Basic", "Thumbnail"];

const EditVideoModal = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeTabProps, setActiveTabProps] = useState({ left: 0, width: 300 });
  const tabRefs = useRef([]);

  useEffect(() => {
    const tab = tabRefs.current[activeTabIndex];
    if (tab) {
      setActiveTabProps({ left: tab.offsetLeft, width: tab.offsetWidth });
    }
  }, [activeTabIndex]);
  return (
    <div className="max-w-screen-sm mx-auto w-full rounded-md overflow-hidden bg-white/10 backdrop-blur-xl h-72">
      <div className="relative py-2 flex mb-4 border-b border-white/10">
        {tabs?.map((tab, index) => (
          <span
            key={nanoid()}
            className={cn(
              "relative z-10 flex-1 text-center text-white cursor-pointer font-medium",
              activeTabIndex === index && "text-primary-dark"
            )}
            ref={(el) => (tabRefs.current[index] = el)}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab}
          </span>
        ))}
        <div
          style={{
            left: activeTabProps?.left,
            width: activeTabProps?.width,
          }}
          className="absolute transition-all duration-300 ease-in-out bg-white rounded-md rounded-b-none bottom-0 top-0 z-0"
        ></div>
      </div>

      {activeTabIndex === 0 && <EditVideoForm />}
      {activeTabIndex === 1 && <ChangeThumbnailForm />}
    </div>
  );
};

export default EditVideoModal;
