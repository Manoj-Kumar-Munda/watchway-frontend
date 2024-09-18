import React from "react";
import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";
import { useSelector } from "react-redux";
import HorizonatalChannelCard from "../components/Channel/SubscribedChannels/HorizonatalChannelCard";
import NotFound from "../components/errorPages/NotFound";
import StatusContainer from "../components/Channel/Layouts/StatusContainer";

const fetchSubscribers = async (channelId) => {
  if (!channelId) {
    return;
  }
  return await request({
    method: "GET",
    url: `/subscription/c/${channelId}`,
  });
};

const useSubscribers = (channelId) => {
  return useQuery({
    queryKey: ["subscribers", channelId],
    queryFn: () => fetchSubscribers(channelId),
  });
};

const Subscribers = () => {
  const { user } = useSelector((state) => state.auth);
  const { data, status } = useSubscribers(user?._id);

  if (status === "pending") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error</div>;
  }

  if (data?.data.length === 0) {
    return (
      <StatusContainer>
        <NotFound errorMsg={"No subscribers"} />
      </StatusContainer>
    );
  }

  return (
    <div className="max-w-screen-md mx-auto my-4 space-y-2">
      {data?.data?.map((subscriber) => (
        <HorizonatalChannelCard channel={subscriber?.subscriberInfo} />
      ))}
    </div>
  );
};

export default Subscribers;
