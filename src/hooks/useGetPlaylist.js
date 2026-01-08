import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axios";

const getPlaylist = async (playlistId) => {
  return request({ url: `/playlist/${playlistId}`, method: "GET" });
};

const useGetPlaylist = (playlistId) => {
  return useQuery({
    queryKey: ["playlist", playlistId],
    queryFn: () => getPlaylist(playlistId),
    enabled: !!playlistId,
  });
};

export default useGetPlaylist;
