import { useQuery } from "@tanstack/react-query";
import { request } from "../../utils/axios";
import { isPublicRoute } from "../../utils/publicRoutes";

const fetchCurrentUser = async () => {
  return await request({
    url: "/users/current-user",
    method: "get",
    withCredentials: true,
  });
};

const useCurrentUser = () => {
  // Skip the query entirely on public routes
  const shouldSkip = isPublicRoute();

  return useQuery({
    queryKey: ["current-user"],
    queryFn: fetchCurrentUser,
    retry: 1,
    enabled: !shouldSkip, // Don't run query on public routes
  });
};

export default useCurrentUser;
