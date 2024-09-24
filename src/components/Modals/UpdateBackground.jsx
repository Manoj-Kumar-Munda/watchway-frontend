import React from "react";
import Input from "../Input";

const UpdateBackgroundModal = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white/30 backdrop-blur-lg p-3 rounded-lg">
      <h1 className="text-lg font-semibold font-Poppins">Update Background</h1>
      <form encType="multipart/form-data" onSubmit={submitHandler}>
        <div className="mt-4">
          <Input name="" type="file" label="Choose a picture" />
        </div>

        <button>Change</button>
      </form>
    </div>
  );
};

export default UpdateBackgroundModal;
