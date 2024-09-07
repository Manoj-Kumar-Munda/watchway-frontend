import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import useSubscriptions from "../../hooks/useSubscriptions";
import ProfileCircle from "../../components/Header/ProfileCircle";
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
  const { subscribedChannels, subCount } = data?.data[0];


  return (
    <div className="my-4 px-4">
      {subscribedChannels?.map((channel) => (
        <HorizonatalChannelCard channel={channel} key={channel?._id} />
      ))}
    </div>
  );
};

export default Subscriptions;
