import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";

const addToPlaylist = async ({ videoId, playlistId }) => {
  return request({
    url: `/playlist/add/${videoId}/${playlistId}`,
    method: "PATCH",
  });
};

const useAddToPlaylist = () => {
  return useMutation({
    mutationKey: ["add-to-playlist"],
    mutationFn: addToPlaylist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["playlist"] });
    },
  });
};

export default useAddToPlaylist;
