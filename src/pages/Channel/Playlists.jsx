import React from "react";
import { useSelector } from "react-redux";
import useGetPlaylist from "../../hooks/useGetPlaylists";
import NoData from "../../components/errorPages/NoData";
import NoDataLayout from "../../components/errorPages/NoDataLayout";
import PlaylistCard from "../../components/Playlist/PlaylistCard";

const Playlists = () => {
  const { user } = useSelector((store) => store.auth);
  const { data, status } = useGetPlaylist(user?._id);

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>Error</h1>;

  return (
    <div className="min-h-56 w-full h-full px-2 my-1">
      {data?.data?.length === 0 ? (
        <NoDataLayout>
          <NoData message="No playlist created" />
        </NoDataLayout>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {data?.data?.map((playlist) => (
            <PlaylistCard playlist={playlist} key={playlist?._id}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Playlists;
