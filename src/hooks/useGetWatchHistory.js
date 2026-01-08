import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axios";

const getWatchHistory = async () => {
  return await request({ url: "/users/history", method: "GET" });
};

const useGetWatchHistory = () => {
  return useQuery({
    queryKey: ["watch-history"],
    queryFn: getWatchHistory,
  });
};

export default useGetWatchHistory;
