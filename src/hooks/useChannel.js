import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";

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

export default useChannel;
