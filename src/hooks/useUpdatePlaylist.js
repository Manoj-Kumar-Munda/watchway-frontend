import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";
import { queryClient } from "../main";
import { useSelector } from "react-redux";

const updatePlaylist = async ({ playlistId, data }) => {
  if (!playlistId) return;
  return await request({
    url: `/playlist/${playlistId}`,
    method: "PATCH",
    data,
  });
};

const useUpdatePlaylist = () => {
  const { currentPlaylist } = useSelector((store) => store.playlist);
  return useMutation({
    mutationKey: ["update-playlist"],
    mutationFn: updatePlaylist,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["playlist", currentPlaylist?._id],
      });
    },
  });
};

export default useUpdatePlaylist;
