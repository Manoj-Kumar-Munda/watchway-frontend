import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axios";

const getVideos = async () => {
  return request({ url: "/dashboard/videos", method: "GET" });
};

const useGetVideosStats = () => {
  return useQuery({
    queryKey: ["videos-stats"],
    queryFn: getVideos,
  });
};

export default useGetVideosStats;
