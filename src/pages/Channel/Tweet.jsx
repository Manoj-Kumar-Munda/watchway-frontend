import React from "react";
import { useSelector } from "react-redux";
import CreateTweet from "../../components/CreateTweet";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../utils/axiosConfig";

const fetchChannelTweets = async (channelId) => {
  if (!channelId) {
    return Promise.reject("ChannelId required");
  }
  return await request({ url: `/tweet/user/${channelId}`, method: "get" });
};

const Tweets = () => {
  const { currentChannel, isAuthorized } = useSelector(
    (store) => store.channel
  );

  const { data, status } = useQuery({
    queryKey: ["tweets", currentChannel?._id],
    queryFn: () => fetchChannelTweets(currentChannel?._id),
  });

  console.log(status);
  console.log(data);

  return (
    <div className="my-4">
      <div className="border border-gray-500 rounded-md py-1 px-1 space-y-2 text-center">
        {isAuthorized && <CreateTweet />}
      </div>

      <div className="min-h-20 grid place-content-center">
        {data?.data.length === 0 ? (
          <span className="font-Poppins text-sm">No tweets available</span>
        ) : (
          data?.data.map((tweet) => {
            
          })
        )}
      </div>
    </div>
  );
};

export default Tweets;
