import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axios";

const fetchChannel = async (username) => {
  return await request({ url: `/users/channel/${username}`, method: "get" });
};

const useChannel = (username) => {
  return useQuery({
    queryKey: ["channel", username],
    queryFn: () => fetchChannel(username),
    staleTime: 2 * 60 * 1000,
  });
};

const fetchChannelVideos = async (channelId) => {
  return await request({
    url: `/videos/channel?id=${channelId}`,
    method: "get",
  });
};
export const useChannelVideo = (channelId) => {
  return useQuery({
    queryKey: ["videos", channelId],
    queryFn: () => fetchChannelVideos(channelId),
    enabled: !!channelId,
  });
};

export default useChannel;
