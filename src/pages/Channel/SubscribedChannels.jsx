import React from "react";
import { useSelector } from "react-redux";
import useSubscriptions from "../../hooks/useSubscriptions";
import HorizonatalChannelCard from "../../components/Channel/SubscribedChannels/HorizonatalChannelCard";
import NoData from "../../components/errorPages/NoData";

const Subscriptions = () => {
  const { currentChannel } = useSelector((store) => store.channel);
  const { data, status } = useSubscriptions(currentChannel?._id);

  if (status === "pending" || !data) return <div>Loading...</div>;
  if (status === "error") return <div>Error</div>;

  if (data?.data.length === 0) {
    return <NoData message="No subscribers" />;
  }

  return (
    <div className="my-4 px-4 space-y-2">
      {data?.data?.map((channel) => (
        <HorizonatalChannelCard
          channel={channel?.channelInfo}
          key={channel?._id}
        />
      ))}
    </div>
  );
};

export default Subscriptions;
