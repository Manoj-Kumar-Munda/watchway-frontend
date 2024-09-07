import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import useSubscriptions from "../../hooks/useSubscriptions";
import ProfileCircle from "../../components/Header/ProfileCircle";
import HorizonatalChannelCard from "../../components/Channel/SubscribedChannels/HorizonatalChannelCard";

const Subscriptions = () => {
  const { currentChannel } = useSelector((store) => store.channel);
  const { data, status } = useSubscriptions(currentChannel?._id);

  if (status === "pending" || !data) return <div>Loading...</div>;
  if (status === "error") return <div>Error</div>;

  const { subscribedChannels, subCount } = data?.data;
  

  return (
    <div className="my-4 px-4">
      {subscribedChannels?.map((channel) => (
        <HorizonatalChannelCard channel={channel} key={channel?._id} />
     
      ))}
    </div>
  );
};

export default Subscriptions;
