import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axios";

const fetchVideos = async () => {
  return await request({ url: `/videos`, method: "get" });
};
export const useVideos = () => {
  return useQuery({
    queryKey: ["videos"],
    queryFn: fetchVideos,
    staleTime: 2 * 60 * 1000,
  });
};
