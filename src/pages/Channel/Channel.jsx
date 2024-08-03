import React, { useEffect, useMemo } from "react";
import { Outlet, useParams } from "react-router-dom";
import ChannelHeader from "../../components/Channel/Header/ChannelHeader";
import { useDispatch, useSelector } from "react-redux";
import useChannel from "../../hooks/useChannel";
import ChannelLoader from "../../components/Loaders/ChannelLoader";
import NotFound from "../../components/errorPages/NotFound";
import {
  setCurrentChannel,
  setIsAuthorized,
} from "../../store/slices/channelSlice";

const Channel = () => {
  const { username } = useParams();
  const { data, isError, isLoading, error } = useChannel(username);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data && user) {
      dispatch(setCurrentChannel(data?.data));
      dispatch(setIsAuthorized(data?.data._id === user._id));
    }

    return () => {
      dispatch(setCurrentChannel(null));
      dispatch(setIsAuthorized(false));
    };
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
      <ChannelHeader
        isMyChannel={data?.data._id === user?._id}
        channelInfo={data?.data}
      />
      <Outlet />
    </div>
  );
};

export default Channel;
