import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";

const fetchPlaylists = async (userId) => {
  return request({ url: `/playlist/user/${userId}`, method: "GET" });
};

const useGetPlaylist = (userId) => {
  return useQuery({
    queryKey: ["playlists"],
    queryFn: () => fetchPlaylists(userId),
    enabled: !!userId,
  });
};

export default useGetPlaylist;
