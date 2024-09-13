import React from "react";
import useFetchComments from "../../hooks/useFetchComments";
import ProfileCircle from "../Header/ProfileCircle";
import { calculateTimeDifferenceToNow } from "../../utils/helpers";
import CommentLikeBtn from "./CommentLikeBtn";

const CommentsList = ({ videoId }) => {
  const { data: comments, status } = useFetchComments(videoId);
  if (status === "loading") return <div>Loading...</div>;
  if (status === "error") return <div>Error</div>;

  return (
    <div className="flex flex-col gap-4">
      {comments?.data?.docs?.map((comment) => (
        <div key={comment?._id} className="flex gap-4 sm:px-4">
          <ProfileCircle imgSrc={comment?.owner?.avatar} className="w-8 h-8" />
          <div className="grow flex flex-col gap-1">
            <p className="text-sm font-semibold">@{comment?.owner?.username}</p>
            <p className="text-sm">{comment?.content}</p>
          </div>

          <div className="flex flex-col justify-between">
            <span className="text-xs text-gray-400">
              {calculateTimeDifferenceToNow(comment?.createdAt)} ago
            </span>
            <CommentLikeBtn comment={comment} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
