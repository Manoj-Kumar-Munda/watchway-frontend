import React, { useMemo } from "react";
import CoverPic from "./CoverPic";
import ProfileCircle from "../../Header/ProfileCircle";
import { useLocation, useNavigate } from "react-router-dom";
import { ChannelBtn, SubscribeBtn } from "../../Button";

const ChannelHeader = ({ isMyChannel, channelInfo }) => {
  const {
    username,
    fullName: channelName,
    avatar,
    coverImage,
    subscribersCount,
    channelsSubscribedToCount,
    isSubscribed,
  } = channelInfo;
  const { pathname } = useLocation();
  const isEditPage = useMemo(() => pathname.includes("edit"), [pathname]);

  const navigate = useNavigate();

  return (
    <div>
      <CoverPic cover={coverImage} />
      <div className="my-4 flex justify-between xs:px-2 items-center md:px-6">
        <div className="flex items-center gap-4">
          <ProfileCircle
            imgSrc={avatar}
            className="w-16 h-16 md:w-32 md:h-32  bg-black"
          />
          <div className="flex flex-col">
            <h2 className="text-sm md:text-xl font-Roboto font-semibold">
              {channelName}
            </h2>
            <span className="text-sm md:text-base">@{username}</span>

            <div className="inline-flex gap-2 items-center text-sm md:text-base ">
              <span>{subscribersCount}&nbsp;subscribers</span>
              <div className="text-sm md:text-lg font-bold">&middot;</div>
              <span>{channelsSubscribedToCount}&nbsp;subscribed</span>
            </div>
          </div>
        </div>

        <div>
          {isMyChannel ? (
            //change this btn
            isEditPage ? (
              <ChannelBtn
                onClick={() => navigate(`/channel/${channelInfo?._id}`)}
              >
                Go to channel
              </ChannelBtn>
            ) : (
              <ChannelBtn onClick={() => navigate("./edit")}>Edit</ChannelBtn>
            )
          ) : (
            <SubscribeBtn channelId={channelInfo?._id}>
              {isSubscribed ? "Unsubscribe " : "Subscribe"}
            </SubscribeBtn>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChannelHeader;
