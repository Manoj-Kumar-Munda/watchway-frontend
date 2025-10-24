import React, { useState } from "react";
import usePostTweet from "../hooks/usePostTweet";
import { cn } from "../utils/cn";

const CreateTweet = () => {
  const [tweet, setTweet] = useState("");
  const { mutate, data, status } = usePostTweet();

  const postTweet = () => {
    mutate(tweet);
    setTweet("");
  };
  return (
    <>
      <textarea
        onChange={(e) => setTweet(e.target.value)}
        value={tweet}
        id="message"
        rows="4"
        className="block p-1 w-full text-sm  rounded-lg border border-gray-300 bg-transparent outline-none border-none"
        placeholder="Write a tweet..."
      />
      <div className="flex justify-end">
        <button
          className={cn(
            "bg-themered-500 text-white font-Poppins px-6 py-1.5 rounded-md",
            status == "pending" && "bg-themered-300"
          )}
          onClick={postTweet}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default CreateTweet;
