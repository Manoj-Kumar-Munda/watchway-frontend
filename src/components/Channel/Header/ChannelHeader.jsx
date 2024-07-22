import React from "react";
import CoverPic from "./CoverPic";
import { MdModeEditOutline } from "react-icons/md";
import ProfileCircle from "../../Header/ProfileCircle";
import { useNavigate } from "react-router-dom";
import Button from "../../Button";

const ChannelHeader = ({ isMyChannel, channelInfo }) => {
  console.log(channelInfo);
  const {
    username,
    fullName: channelName,
    avatar,
    coverImage,
    subscribersCount,
    channelsSubscribedToCount,
    isSubscribed,
  } = channelInfo;

  const navigate = useNavigate();

  return (
    <div>
      <CoverPic cover={coverImage} />
      <div className="my-4 flex justify-between px-2 items-center md:px-6">
        <div className="flex items-center gap-4">
          <ProfileCircle
            imgSrc={avatar}
            className="w-16 h-16 md:w-32 md:h-32 border bg-black"
          />
          <div className="flex flex-col">
            <h2 className="text-sm md:text-xl font-Roboto font-semibold">{channelName}</h2>
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
            <Button
              className="bg-themered-500 inline-flex items-center gap-2 w-24 relative before:content-[''] before:absolute before:w-full before:h-full before:bg-themered-300 before:rounded before:-z-10 before:left-1.5 before:-bottom-1.5"
              onClick={() => navigate("./edit")}
            >
              <MdModeEditOutline />
              <span className="text-white font-Roboto">Edit</span>
            </Button>
          ) : (
            <button>Subscribe</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChannelHeader;
