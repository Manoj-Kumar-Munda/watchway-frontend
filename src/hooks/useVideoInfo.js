import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";

const getVideoInfo = async (videoId) => {
  if (!videoId) {
    return Promise.reject("Invalid videoId");
  }
  return await request({
    method: "GET",
    url: `/videos/${videoId}`,
  });
};

const useVideoInfo = (videoId) => {
  return useQuery({
    queryKey: ["videoInfo", videoId],
    queryFn: () => getVideoInfo(videoId),
  });
};

export default useVideoInfo;
