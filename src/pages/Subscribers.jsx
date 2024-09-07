import React from "react";
import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";
import { useSelector } from "react-redux";
import HorizonatalChannelCard from "../components/Channel/SubscribedChannels/HorizonatalChannelCard";

const fetchSubscribers = async (channelId) => {
  console.log(channelId);
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
  console.log(user);

  if (status === "pending") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error</div>;
  }

  if (data?.data.length === 0) {
    return <div>No subscribers</div>;
  }

  const { subscribers } = data?.data[0];

  return (
    <div className="max-w-screen-md mx-auto my-4">
      {subscribers?.map((subscriber) => (
        <HorizonatalChannelCard channel={subscriber} />
      ))}
    </div>
  );
};

export default Subscribers;
