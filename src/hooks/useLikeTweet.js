import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";
import { queryClient } from "../main";

const likeTweet = async (tweetId) => {
    console.log(tweetId);
    
  return await request({ url: `/like/toggle/t/${tweetId}`, method: "post" });
};

export const useLikeTweet = () => {
  return useMutation({
    mutationKey: ["like"],
    mutationFn: likeTweet,
    onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey: ["tweets"]
        })
    }
  });
};
