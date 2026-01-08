import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axios";
import { queryClient } from "../main";

const updateVideo = async ({ id, data }) => {
  return await request({ url: `/videos/update/${id}`, method: "PATCH", data });
};

const useUpdateVideo = (videoId) => {
  return useMutation({
    mutationKey: ["updateVideo"],
    mutationFn: updateVideo,
  });
};

export default useUpdateVideo;
