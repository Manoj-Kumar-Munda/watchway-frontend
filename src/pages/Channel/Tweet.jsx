import React from "react";
import { useSelector } from "react-redux";
import CreateTweet from "../../components/CreateTweet";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../utils/axios";
import NoTweetImg from "../../assets/svg/notweet.svg";
import NoData from "../../components/errorPages/NoData";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { cn } from "../../utils/cn";
import { calculateTimeDifferenceToNow } from "../../utils/helpers";
import { useLikeTweet } from "../../hooks/useLikeTweet";
import ProfileCircle from "../../components/Header/ProfileCircle";
import DotLoader from "../../components/Loaders/DotLoader";

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

  const { mutate } = useLikeTweet();

  const { data, status } = useQuery({
    queryKey: ["tweets"],
    queryFn: () => fetchChannelTweets(currentChannel?._id),
  });

  if (status === "pending") {
    return <div>Loading</div>;
  }

  return (
    <div className="my-4">
      {isAuthorized && (
        <div className="border border-white/10 rounded-md py-1 px-1 space-y-2 text-center">
          <CreateTweet />
        </div>
      )}

      <div
        className={cn(
          "my-4 font-Roboto  rounded-lg",
          data?.data?.length > 0 && "min-h-max"
        )}
      >
        {data?.data.length === 0 ? (
          <NoData imgSrc={NoTweetImg} message="No tweets" />
        ) : (
          data?.data.map((tweet) => (
            <div key={tweet?._id} className="p-3 w-full">
              <div className="flex gap-2 content-start">
                <ProfileCircle
                  imgSrc={tweet?.owner?.avatar}
                  className="shrink-0 w-16 h-16 overflow-hidden rounded-full bg-gray-600"
                />
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="flex gap-4 items-center">
                      <span className="font-medium">
                        {tweet?.owner?.fullName}
                      </span>
                      <span className="text-sm text-gray-300 tracking-tight">
                        {calculateTimeDifferenceToNow(tweet?.createdAt)} ago
                      </span>
                    </div>
                    <p>{tweet?.content}</p>
                  </div>

                  <div className="inline-flex gap-1 items-center">
                    <button onClick={() => mutate(tweet?._id)}>
                      {tweet?.isLiked ? <BiSolidLike /> : <BiLike />}
                    </button>
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
