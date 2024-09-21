import React from "react";
import useGetPlaylist from "../hooks/useGetPlaylists";
import PlaylistCard from "../components/Playlist/PlaylistCard";

const MyCollections = () => {
  const { data, status } = useGetPlaylist();
  console.log(data);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {data?.data?.map((playlist) => (
          <PlaylistCard playlist={playlist} key={playlist?._id} />
        ))}
      </div>
    </div>
  );
};

export default MyCollections;
