import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetPlaylist from "../hooks/useGetPlaylist";
import DotLoader from "../components/Loaders/DotLoader";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPlaylist,
  setIsAuthorized,
  setToDefault,
} from "../store/slices/playlistSlice";
import PlaylistHeader from "../components/Playlist/PlaylistHeader";
import PlaylistVideosList from "../components/Playlist/PlaylistVideosList";

const Playlist = () => {
  const { playlistId } = useParams();
  const { data, status } = useGetPlaylist(playlistId);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    if (status === "success") {
      dispatch(setCurrentPlaylist(data?.data));
      dispatch(setIsAuthorized(data?.data?.owner === user._id));
    }
    return () => dispatch(setToDefault());
  }, [data]);

  if (status === "pending") return <DotLoader />;
  if (status === "error") return <div>Error</div>;

  return (
    <div className=" max-w-screen-lg mx-auto mb-4">
      <PlaylistHeader />
      <PlaylistVideosList videos={data?.data?.videos} />
    </div>
  );
};

export default Playlist;
