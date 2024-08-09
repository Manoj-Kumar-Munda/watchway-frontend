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
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["tweets", currentChannel?._id],
      });
    },
  });
};

export default usePostTweet;
