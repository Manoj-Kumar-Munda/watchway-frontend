import { useQuery } from "@tanstack/react-query";
import { request } from "../../utils/axiosConfig";

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
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useCurrentUser;
