import React from "react";
import { useSelector } from "react-redux";
import CreateTweet from "../../components/CreateTweet";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../utils/axiosConfig";
import NoTweetImg from "../../assets/svg/notweet.svg";
import NoData from "../../components/errorPages/NoData";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { cn } from "../../utils/cn";

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


  return (
    <div className="my-4">
      <div className="border border-gray-500 rounded-md py-1 px-1 space-y-2 text-center">
        {isAuthorized && <CreateTweet />}
      </div>

      <div className={cn(`min-h-48 my-4 font-Roboto border rounded-lg`, data?.data?.length>0 && "min-h-max" )}>
        {data?.data.length === 0 ? (
          <NoData imgSrc={NoTweetImg} message="No tweets" />
        ) : (
          data?.data.map((tweet) => (
            <div key={tweet?._id} className="p-3 w-full">
              <div className="flex gap-2">
                <div className="w-16 h-16 rounded-full bg-gray-600">
                  <img src={tweet?.owner?.avatar} alt="image" />
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <span className="font-medium">
                      {tweet?.owner?.fullName}
                    </span>
                    <p>{tweet?.content}</p>
                  </div>

                  <div className="inline-flex gap-1 items-center">
                    {
                      tweet?.isLiked ? <BiSolidLike /> : <BiLike />
                    }
                    <span className="text-sm">{tweet?.likeCount}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Tweets;
