import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { request } from "../utils/axiosConfig";

const createPlaylist = async (userId, data) => {
  if (!userId) return;
  return request({ url: "/playlist", method: "POST", data });
};

const useCreatePlaylist = () => {
  const { user } = useSelector((store) => store.auth);
  return useMutation({
    mutationKey: ["create-playlist"],
    mutationFn: (data) => createPlaylist(user?._id, data),
  });
};

export default useCreatePlaylist;
