import React from "react";
import Input from "../Input";

const ChangeThumbnailForm = () => {
  return (
    <div className="pt-4 max-w-screen-xs mx-auto">
      <form  className="flex flex-col gap-4 mb-6">
        <Input label="New thumbnail" type="file" />

        <button className="py-2 bg-black transition-all">Change</button>
      </form>
    </div>
  );
};

export default ChangeThumbnailForm;
