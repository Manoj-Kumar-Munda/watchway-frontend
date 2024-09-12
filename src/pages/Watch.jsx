import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import useVideoInfo from "../hooks/useVideoInfo";
import { extractVideoId, formateDate } from "../utils/helpers";
import ChannelBar from "../components/ChannelBar";
import DotLoader from "../components/Loaders/DotLoader";
import { BiLike, BiSolidLike } from "react-icons/bi";
import useLikeVideo from "../hooks/useLikeVideo";
import useUpdateWatchHistory from "../hooks/useUpdateWatchHistory";

const Watch = () => {
  const { videoId } = useParams();
  const { data, status } = useVideoInfo(videoId);
  const { mutate } = useLikeVideo();
  const { mutate: updateWatchHistory } = useUpdateWatchHistory(videoId);

  useEffect(() => {
    updateWatchHistory(videoId);
  }, []);

  if (status === "pending") return <DotLoader />;
  if (status === "error") return <div>Error</div>;
  const video = data?.data[0];

  return (
    <div className="max-w-screen-xl mx-auto flex">
      <div className="max-w-screen-md">
        <div className="w-full aspect-video rounded-lg overflow-hidden ">
          <VideoPlayer videoId={extractVideoId(video?.videoFile)} />
        </div>

        <div className="flex flex-col gap-3 my-3">
          <h1 className="text-xl font-bold">{video?.title}</h1>

          <div className="flex justify-between">
            <ChannelBar owner={video?.owner} />
            <div className="inline-flex items-center gap-2">
              <button onClick={() => mutate(video?._id)}>
                {video?.isLiked ? <BiSolidLike /> : <BiLike />}
              </button>
              <span>{video?.likesCount}</span>
            </div>
          </div>

          <div className="bg-white/10 p-3 rounded-xl">
            <div className="flex gap-2">
              <span>{video?.views} views |</span>
              <span className="font-semibold">Posted On {formateDate(video?.createdAt)}
              </span>
            </div>
            {/* create readMore button */}
            <p className="line-clamp-6">{video?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
