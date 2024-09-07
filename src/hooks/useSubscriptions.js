import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";

const getSubscriptions = async (id) => {
  if (!id) {
    return Promise.reject("Invalid ChnnaleId");
  }
  return await request({
    method: "GET",
    url: `/subscription/u/${id}`,
  });
};

const useSubscriptions = (id) => {
 

  return useQuery({
    queryKey: ["subscriptions"],
    queryFn: () => getSubscriptions(id),
  });
};

export default useSubscriptions;
