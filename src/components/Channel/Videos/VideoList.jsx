import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useChannelVideo } from "../../../hooks/useChannel";
import VerticalVideoCard from "../../VerticalVideoCard";
import VerticalVideoCardContainer from "./VerticalVideoCardContainer";
import { openModal } from "../../../store/slices/modalsSlice";
import Modal from "../../Modals/Modal";
import UploadVideoModal from "../../Modals/UploadVideoModal";

const VideoList = () => {
  const dispatch = useDispatch();
  const { currentChannel, isAuthorized } = useSelector(
    (store) => store.channel
  );
  const { data, status } = useChannelVideo(currentChannel?._id);

  if (status === "pending") {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Modal className="max-w-screen-sm" modalId={"upload"}>
        <UploadVideoModal />
      </Modal>
      <button
        onClick={() => {
          dispatch(openModal("upload"));
        }}
        className="block ml-auto font-Roboto text-sm my-1.5 mr-1.5 bg-themered-500 dark:bg-white/10 rounded-lg text-white py-2 px-3"
      >
        +Upload
      </button>
      <VerticalVideoCardContainer>
        {data?.data?.docs.map((video) => {
          return (
            <VerticalVideoCard
              video={video}
              key={video?._id}
              isMyChannel={isAuthorized}
            />
          );
        })}
      </VerticalVideoCardContainer>
    </>
  );
};

export default VideoList;
