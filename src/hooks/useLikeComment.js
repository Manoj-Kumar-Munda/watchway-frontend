import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";

const likeComment = async (commentId) => {
  if (!commentId) return;
  return await request({ url: `/like/toggle/c/${commentId}`, method: "POST" });
};

const useLikeComment = (comment) => {
  return useMutation({
    mutationKey: ["like-comment"],
    mutationFn: likeComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments",comment?.video] });
    },
  });
};

export default useLikeComment;
