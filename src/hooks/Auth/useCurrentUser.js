import { useQuery } from "@tanstack/react-query";
import { request } from "../../utils/axios";

const fetchCurrentUser = async () => {
  return await request({
    url: "/users/current-user",
    method: "get",
    withCredentials: true,
  });
};

const useCurrentUser = () => {
  return useQuery({
    queryKey: ["current-user"],
    queryFn: fetchCurrentUser,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
};

export default useCurrentUser;
