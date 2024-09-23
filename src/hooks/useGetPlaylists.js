import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";
import { useSelector } from "react-redux";

const fetchPlaylists = async (userId) => {
  if (!userId) {
    return;
  }
  return request({ url: `/playlist/user/${userId}`, method: "GET" });
};

const useGetPlaylist = () => {
  const { user } = useSelector((store) => store.auth);
  return useQuery({
    queryKey: ["playlists"],
    queryFn: () => fetchPlaylists(user?._id),
  });
};

export default useGetPlaylist;
