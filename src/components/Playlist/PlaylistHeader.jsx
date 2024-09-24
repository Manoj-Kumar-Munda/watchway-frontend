import React, { useMemo } from "react";
import { LuListVideo } from "react-icons/lu";
import { MdDeleteSweep } from "react-icons/md";
import { randomColor } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import DeletePlaylist from "./DeletePlaylist";
import UpdatePlaylist from "./UpdatePlaylist";
import { toggleIsUpdatePlaylist } from "../../store/slices/playlistSlice";

const PlaylistHeader = () => {
  const { currentPlaylist, isAuthorized } = useSelector(
    (store) => store.playlist
  );
  const dispatch = useDispatch();
  const headerBgColor = useMemo(() => randomColor(), []);
  return (
    <div
      style={{ backgroundColor: headerBgColor }}
      className={`relative rounded-xl py-4 px-3  bg-gradient-to-t sm:bg-gradient-to-tl from-primary-dark to-transparent`}
    >
      <div className="space-y-1">
        <div className=" sm:max-w-60 aspect-video w-full h-full mx-auto sm:mx-0 ">
          <img
            src={currentPlaylist?.coverImage}
            className="object-cover rounded-xl"
          />
        </div>
        <h1 className="font-Poppins text-2xl font-semibold my-1">
          {currentPlaylist?.name}
        </h1>
      </div>
      <div className="font-Poppins my-2 space-y-1">
        <h2 className="font-medium">Description</h2>
        <p className="text-gray-300 text-xs line-clamp-4 font-medium">
          {currentPlaylist?.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-1 text-sm">
          <LuListVideo size={20} />
          <span className="text-sm font-semibold">
            {currentPlaylist?.videos?.length} Videos
          </span>
        </div>

        {isAuthorized && (
          <div className="flex items-center">
            <UpdatePlaylist />

            {currentPlaylist?.videos?.length > 0 && (
              <button
                title="Remove videos"
                className="w-10 h-10 rounded-full transition-colors hover:bg-white/20 flex justify-center items-center"
                onClick={() => dispatch(toggleIsUpdatePlaylist())}
              >
                <MdDeleteSweep color="#eee" size={20} />
              </button>
            )}
          </div>
        )}
      </div>

      {isAuthorized && <DeletePlaylist />}
    </div>
  );
};

export default React.memo(PlaylistHeader);
