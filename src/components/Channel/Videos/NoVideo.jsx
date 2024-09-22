import React from "react";
import NoData from "../../errorPages/NoData";
import { ChannelBtn } from "../../Button";
import { FaPlus } from "react-icons/fa6";
import NoVideoImg from "../../../assets/svg/no-video.svg";
import Modal from "../../Modals/Modal";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../store/slices/modalsSlice";
import UploadVideoModal from "../../Modals/UploadVideoModal";

const NoVideo = () => {
  const dispatch = useDispatch();
  const { isAuthorized } = useSelector((store) => store.channel);

  return (
    <div className="absolute inset-0 flex flex-col gap-2 justify-center items-center">
      <Modal className="max-w-screen-sm">
        <UploadVideoModal />
      </Modal>
      <NoData message="No Video uploaded" imgSrc={NoVideoImg} className="" />

      {isAuthorized ? (
        <ChannelBtn
          className={"text-white"}
          onClick={() => {
            dispatch(openModal("upload"));
          }}
        >
          <FaPlus color="white" />
          Uplod Videos
        </ChannelBtn>
      ) : null}
    </div>
  );
};

export default NoVideo;
