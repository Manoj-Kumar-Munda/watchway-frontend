import React, { useState } from "react";
import usePostTweet from "../hooks/usePostTweet";

const CreateTweet = () => {
  const [tweet, setTweet] = useState("");
  const { mutate, data, status } = usePostTweet();

  const postTweet = () => {
    mutate(tweet);
  };
  return (
    <>
      <textarea
        onChange={(e) => setTweet(e.target.value)}
        id="message"
        rows="4"
        className="block p-1 w-full text-sm  rounded-lg border border-gray-300 outline-none border-none"
        placeholder="Write a tweet..."
      />
      <div className="flex justify-end">
        <button
          className="bg-themered-500 text-white font-Poppins px-6 py-1.5 rounded-md"
          onClick={postTweet}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default CreateTweet;
