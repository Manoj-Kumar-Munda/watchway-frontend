import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";

const fetchComments = async (videoId) => {
  if (!videoId) return;
  return await request({ method: "GET", url: `/comments/${videoId}` });
};

const useFetchComments = (videoId) => {
  return useQuery({
    queryKey: ["comments", videoId],
    queryFn: () => fetchComments(videoId),
  });
};

export default useFetchComments;
