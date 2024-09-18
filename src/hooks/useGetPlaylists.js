import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";

const fetchPlaylists = async (userId) => {
  if (!userId) {
    return;
  }
  return request({ url: `/playlist/user/${userId}`, method: "GET" });
};

const useGetPlaylist = (userId) => {
  return useQuery({
    queryKey: ["playlist", userId],
    queryFn: () => fetchPlaylists(userId),
  });
};

export default useGetPlaylist;
