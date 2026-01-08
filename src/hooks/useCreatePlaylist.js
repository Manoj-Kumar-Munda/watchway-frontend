import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { request } from "../utils/axios";
import { queryClient } from "../main";

const createPlaylist = async (userId, data) => {
  if (!userId) return;
  return await request({ url: "/playlist", method: "POST", data });
};

const useCreatePlaylist = () => {
  const { user } = useSelector((store) => store.auth);
  return useMutation({
    mutationKey: ["create-playlist"],
    mutationFn: (data) => createPlaylist(user?._id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["playlists"] });
    },
  });
};

export default useCreatePlaylist;
