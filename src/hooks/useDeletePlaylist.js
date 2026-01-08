import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axios";

const deletePlaylist = async (playlistId) => {
  return await request({ url: `/playlist/${playlistId}`, method: "DELETE" });
};

const useDeletePlaylist = () => {
  return useMutation({
    mutationKey: ["delete-playlist"],
    mutationFn: deletePlaylist,
  });
};

export default useDeletePlaylist;
