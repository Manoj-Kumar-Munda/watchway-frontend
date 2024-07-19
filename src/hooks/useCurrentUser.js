import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axios-utils";

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
  });
};

export default useCurrentUser;
