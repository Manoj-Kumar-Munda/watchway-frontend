import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";

const getPlaylist = async (playlistId) => {
  if (!playlistId) {
    return;
  }
  return request({ url: `/playlist/${playlistId}`, method: "GET" });
};

const useGetPlaylist = (playlistId) => {
  return useQuery({
    queryKey: ["playlist", playlistId],
    queryFn: () => getPlaylist(playlistId),
  });
};

export default useGetPlaylist;
