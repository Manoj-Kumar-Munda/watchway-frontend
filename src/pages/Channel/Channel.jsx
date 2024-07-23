import React, { useMemo } from "react";
import { Outlet, useParams } from "react-router-dom";
import ChannelHeader from "../../components/Channel/Header/ChannelHeader";
import { useSelector } from "react-redux";
import useChannel from "../../hooks/useChannel";
import ChannelLoader from "../../components/Loaders/ChannelLoader";
import NotFound from "../../components/errorPages/NotFound";

const Channel = () => {
  const { username } = useParams();
  const { data, isError, isLoading, status, error } = useChannel(username);
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

  if (isError) {
    if (error.status === 404) {
      return <NotFound errorMsg={"Channel doesn't exist"} />;
    }
    return <h1>Error...</h1>;
  }

  return (
    <div className="relative">
      <ChannelHeader isMyChannel={isMyChannel} channelInfo={data?.data?.data} />
      <Outlet />
    </div>
  );
};

export default Channel;
