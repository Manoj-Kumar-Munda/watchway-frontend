import React, { useMemo } from "react";
import { Outlet, useParams } from "react-router-dom";
import ChannelHeader from "../../components/Channel/Header/ChannelHeader";
import { useSelector } from "react-redux";
import useChannel from "../../hooks/useChannel";
import ChannelLoader from "../../components/Loaders/ChannelLoader";
import NotFound from "../../components/errorPages/NotFound";

const Channel = () => {
  const { username } = useParams();
  const { data, isError, isLoading, error } = useChannel(username);
  const { user } = useSelector((store) => store.auth);

  const isMyChannel = useMemo(() => {
    if (data && user) {
      return data?.data._id === user._id;
    }
    return false;
  }, [data, user]);

  if (isLoading) {
    return <ChannelLoader />;
  }

  if (isError) {
    if (!error?.data?.success) {
      return (
        <NotFound
          classname="absolute inset-0"
          errorMsg={error?.data?.message}
        />
      );
    }
  }

  return (
    <div className="relative">
      <ChannelHeader isMyChannel={isMyChannel} channelInfo={data?.data} />
      <Outlet />
    </div>
  );
};

export default Channel;
