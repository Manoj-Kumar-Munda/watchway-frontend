import React, { useRef } from "react";
import { useSelector } from "react-redux";
import ProfileCircle from "../Header/ProfileCircle";
import useCreateComment from "../../hooks/useCreateComment";
import CommentsList from "./CommentsList";

const Comments = ({ video }) => {
  const { user } = useSelector((store) => store.auth);

  const { mutate: createComment } = useCreateComment(video);
  const inputRef = useRef(null);

  const handleSubmit = () => {
    const content = inputRef.current.value;
    createComment({ video, content });
  };

  return (
    <div className="my-4">
      <h1 className="font-semibold text-lg">Comments</h1>
      <div className="my-4 flex items-center gap-4  px-1 xs:px-4">
        <ProfileCircle
          imgSrc={user?.avatar}
          className="shrink-0 sm:w-12 sm:h-12"
        />
        <input
          ref={inputRef}
          placeholder="Comment"
          className="bg-transparent pb-1 outline-none border-b-2 border-b-gray-400 w-full"
        />
        <button
          onClick={handleSubmit}
          className=" bg-white/10 backdrop-blur-xl ripple-button py-1.5 px-2 rounded-lg shrink-0 border border-white/10 "
        >
          Comment
        </button>
      </div>
      <CommentsList videoId={video} />
    </div>
  );
};

export default Comments;
