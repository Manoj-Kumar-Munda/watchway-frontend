import { queryClient } from "../main";
import { request } from "../utils/axiosConfig";
import { useMutation } from "@tanstack/react-query";

const subscribe = async (channelId) => {
  return await request({
    method: "POST",
    url: `/subscription/c/${channelId}`,
  });
};

const useSubscribe = (username) => {
  return useMutation({
    mutationKey: ["subscribe"],
    mutationFn: subscribe,
    onSettled: () => {
      queryClient.invalidateQueries("subscriptions");
      queryClient.invalidateQueries({
        queryKey: ["channel", username],
      });
    },
  });
};

export default useSubscribe;
