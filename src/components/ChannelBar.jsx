import React from "react";
import useChannel from "../hooks/useChannel";
import ProfileCircle from "./Header/ProfileCircle";
import { SubscribeBtn } from "./Button";

const ChannelBar = ({ owner }) => {
  console.log(owner);
  const { data, status } = useChannel(owner);
  console.log(data);

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <ProfileCircle imgSrc={data?.data?.avatar} className="w-12 h-12" />
        <div>
          <h1 className="font-medium text-sm">{data?.data?.fullName}</h1>
          <p className="text-sm text-gray-300">
            {data?.data?.subscribersCount} subscribers
          </p>
        </div>
      </div>

      <SubscribeBtn channelId={data?.data?._id}>
        { data?.data?.isSubscribed ? "Unsubscribe" : "Subscribe"}
      </SubscribeBtn>
    </div>
  );
};

export default ChannelBar;
