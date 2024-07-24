import React from 'react'
import NoData from '../../errorPages/NoData'
import { ChannelBtn } from '../../Button'
import { FaPlus } from 'react-icons/fa6'
import NoVideoImg from "../../../assets/svg/no-video.svg"

const NoVideo = () => {
  return (
    <div className="absolute inset-0 flex flex-col gap-2 justify-center items-center">
    <NoData
      message="No Video uploaded"
      imgSrc={NoVideoImg}
      className=""
    />
    <ChannelBtn className={"text-white"}>
      <FaPlus color="white" />Uplod Videos
    </ChannelBtn>
  </div>
  )
}

export default NoVideo