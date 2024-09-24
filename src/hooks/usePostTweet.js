import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";
import { queryClient } from "../main";

const postTweet = async (content) => {
  return await request({ url: `/tweet`, method: "post", data: { content } });
};

const usePostTweet = () => {
  return useMutation({
    mutationKey: ["postTweet"],
    mutationFn: postTweet,
    onMutate: async (newTweet) => {
      await queryClient.cancelQueries({ queryKey: ["tweets"] });

      const previousTweets = queryClient.getQueryData(["tweets"]);

      queryClient.setQueryData(["tweets"], (old) => {
        return { ...old, data: [...old?.data, newTweet] };
      });

      return { previousTweets };
    },

    onError: (err, newTweet, context) => {
      queryClient.setQueryData(["tweets"], context.previousTweets);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["tweets"],
      });
    },
  });
};

export default usePostTweet;
