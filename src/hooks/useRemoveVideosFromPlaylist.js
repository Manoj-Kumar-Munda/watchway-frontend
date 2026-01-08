import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axios";
import { queryClient } from "../main";
import { useSelector } from "react-redux";

const removeVideos = async ({ playlistId, data }) => {
  return await request({
    url: `/playlist/remove/${playlistId}`,
    method: "PATCH",
    data,
  });
};

const useRemoveVideosFromPlaylist = () => {
  const { currentPlaylist } = useSelector((store) => store.playlist);
  return useMutation({
    mutationKey: ["remove-videos"],
    mutationFn: removeVideos,
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: ["playlist", currentPlaylist?._id],
      }),
  });
};

export default useRemoveVideosFromPlaylist;
