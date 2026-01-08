import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axios";

const getLikedVideos = async () => {
  return await request({ method: "GET", url: "/like/videos" });
};

const useLikedVideos = () => {
  return useQuery({
    queryKey: ["likedVideos"],
    queryFn: getLikedVideos,
  });
};

export default useLikedVideos;
