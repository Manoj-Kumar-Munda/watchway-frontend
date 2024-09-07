import React from "react";
import ProfileCircle from "../../Header/ProfileCircle";
import { SubscribeBtn } from "../../Button";

const HorizonatalChannelCard = ({ channel }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <ProfileCircle imgSrc={channel?.avatar} className="w-24 h-24" />
        <div className="inline-flex flex-col">
          <h3>{channel?.fullName}</h3>
          <span className="text-gray-300 text-sm">@{channel?.username}</span>
          <span className="text-gray-300 text-sm">{channel?.totalSubs ? `${channel.totalSubs} subscribers` : ""}</span>
        </div>
      </div>

      <div>
        <SubscribeBtn channel={channel}>
          {channel?.isSubscribed ? "Unsubscribe" : "Subscribe"}
        </SubscribeBtn>
      </div>
    </div>
  );
};

export default HorizonatalChannelCard;
