import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axios";
import { queryClient } from "../main";
const createComment = async ({ video, content }) => {
  return await request({
    url: `/comments/${video}`,
    method: "post",
    data: { content },
  });
};

const useCreateComment = (video) => {
  return useMutation({
    mutationKey: ["createComment"],
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", video] });
    },
  });
};

export default useCreateComment;
