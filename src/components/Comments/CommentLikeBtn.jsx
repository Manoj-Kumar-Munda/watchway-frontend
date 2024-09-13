import React from "react";
import useLikeComment from "../../hooks/useLikeComment";
import { BiLike, BiSolidLike } from "react-icons/bi";

const CommentLikeBtn = ({ comment }) => {
  const { mutate: toggleLike } = useLikeComment(comment);
  return (
    <div className="flex items-center gap-1 justify-end">
      <button onClick={() => toggleLike(comment?._id)}>
        {comment?.isLiked ? <BiSolidLike /> : <BiLike />}
      </button>
      <span className="text-xs">{comment?.totalLikes}</span>
    </div>
  );
};

export default CommentLikeBtn;
