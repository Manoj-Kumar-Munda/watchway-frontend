import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";
import { queryClient } from "../main";
import { useSelector } from "react-redux";

const postTweet = async (content) => {
  console.log(content);

  return await request({ url: `/tweet`, method: "post", data: { content } });
};

const usePostTweet = () => {
  const { currentChannel } = useSelector((store) => store.channel);
  return useMutation({
    mutationKey: ["postTweet"],
    mutationFn: postTweet,
    onMutate: async (newTweet) => {
      console.log("new : ", newTweet);

      await queryClient.cancelQueries({ queryKey: ['tweets'] });

      const previousTweets = queryClient.getQueryData(['tweets']);

      queryClient.setQueryData(['tweets'], (old) => {
        return { ...old, data: [...old?.data, newTweet] };
      });

      return { previousTweets };
    },

    onError: (err, newTweet, context) => {
      queryClient.setQueryData(['tweets'], context.previousTweets);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['tweets'],
      });
    },
  });
};

export default usePostTweet;
