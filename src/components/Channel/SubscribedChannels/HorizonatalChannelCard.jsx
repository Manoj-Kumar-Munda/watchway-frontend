import React from "react";
import ProfileCircle from "../../Header/ProfileCircle";
import { SubscribeBtn } from "../../Button";

const HorizonatalChannelCard = ({ channel }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <ProfileCircle imgSrc={channel?.avatar} className="w-24 h-24" />
        <div>
          <h3>{channel?.fullName}</h3>
          <span>{channel?.totalSubs} subscribers</span>
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
