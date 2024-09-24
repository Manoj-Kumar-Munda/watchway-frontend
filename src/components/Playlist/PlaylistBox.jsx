import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/slices/modalsSlice";
import useGetPlaylist from "../../hooks/useGetPlaylists";
import { cn } from "../../utils/cn";
import PlaylistItem from "./PlaylistItem";

const PlaylistBox = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(store => store.auth);
  const { data } = useGetPlaylist(user?._id);

  return (
    <div className="flex flex-col gap-1 text-center ">
      {data?.data?.map((playlist) => (
        <PlaylistItem key={playlist?._id} playlist={playlist} />
      ))}
      <button
        onClick={() => dispatch(openModal("playlist"))}
        className={cn(
          " text-center self-center px-2 py-1 text-sm bg-primary-dark border border-white/40  rounded-md text-nowrap"
        )}
      >
        Create playlist
      </button>
    </div>
  );
};

export default PlaylistBox;
