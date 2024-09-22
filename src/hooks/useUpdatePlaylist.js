import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";

const updatePlaylist = async ({ playlistId, data }) => {
  if (!playlistId) return;
  return await request({ url: `/playlist/${playlistId}`, method: "PATCH", data });
};

const useUpdatePlaylist = () => {
  return useMutation({
    mutationKey: ["update-playlist"],
    mutationFn: updatePlaylist,
  });
};

export default useUpdatePlaylist;
