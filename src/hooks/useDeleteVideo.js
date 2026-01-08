import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axios";

const deleteVideo = async (videoId) => {
  return await request({ url: `/videos/${videoId}`, method: "DELETE" });
};

const useDeleteVideo = () => {
  return useMutation({
    mutationKey: ["delete-video"],
    mutationFn: deleteVideo,
  });
};

export default useDeleteVideo;
