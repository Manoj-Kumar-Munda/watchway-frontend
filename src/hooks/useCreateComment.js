import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";

const createComment = async ({ video, content }) => {
  return await request({
    url: `/comments/${video}`,
    method: "post",
    data: { content },
  });
};

const useCreateComment = () => {
  return useMutation({
    mutationKey: ["createComment"],
    mutationFn: createComment,
  });
};

export default useCreateComment;
