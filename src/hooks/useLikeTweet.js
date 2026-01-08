import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axios";
import { queryClient } from "../main";

const likeTweet = async (tweetId) => {
  return await request({ url: `/like/toggle/t/${tweetId}`, method: "post" });
};

export const useLikeTweet = () => {
  return useMutation({
    mutationKey: ["like"],
    mutationFn: likeTweet,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tweets"],
      });
    },
  });
};
