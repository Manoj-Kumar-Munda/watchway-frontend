import React, { useMemo } from "react";
import { Outlet, useParams } from "react-router-dom";
import ChannelHeader from "../../components/Channel/Header/ChannelHeader";
import { useSelector } from "react-redux";
import useChannel from "../../hooks/useChannel";
import ChannelLoader from "../../components/Loaders/ChannelLoader";

const Channel = () => {
  const { username } = useParams();
  const { data, isError, isLoading } = useChannel(username);
  const { user } = useSelector((store) => store.auth);

  console.log("channel :", data);

  const isMyChannel = useMemo(() => {
    if (data && user) {
      data?.data?.data?.username === user?.username;
      return true;
    }
    return false;
  }, [data, user]);

  if (isLoading) {
    return <ChannelLoader />;
  }

  return (
    <div className="relative">
      <ChannelHeader isMyChannel={isMyChannel} channelInfo={data?.data?.data} />
      <Outlet />
    </div>
  );
};

export default Channel;
