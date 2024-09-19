import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/slices/modalsSlice";
import useGetPlaylist from "../../hooks/useGetPlaylists";
import { cn } from "../../utils/cn";

const PlaylistBox = () => {
  const dispatch = useDispatch();
  const { data, status } = useGetPlaylist();

  

  return (
    <div className="flex flex-col gap-1 text-center ">
      {data?.data?.map((playlist) => (
        <div>{playlist?.name}</div>
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
