import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axios";
import { useSelector } from "react-redux";

const addToPlaylist = async ({ videoId, playlistId }) => {
  return request({
    url: `/playlist/add/${videoId}/${playlistId}`,
    method: "PATCH",
  });
};

const useAddToPlaylist = () => {
  const { currentPlaylist } = useSelector((store) => store.playlist);
  return useMutation({
    mutationKey: ["add-to-playlist"],
    mutationFn: addToPlaylist,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["playlist", currentPlaylist?._id],
      });
    },
  });
};

export default useAddToPlaylist;
