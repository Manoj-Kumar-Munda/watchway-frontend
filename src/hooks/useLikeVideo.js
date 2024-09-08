import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";
import { queryClient } from "../main";

const likeVideo = async (videoId) => {
  if (!videoId) {
    return;
  }
  return await request({ method: "POST", url: `/like/toggle/v/${videoId}` });
};

const useLikeVideo = () => {
  return useMutation({
    mutationFn: likeVideo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videoInfo"] });
    },
  });
};

export default useLikeVideo;
