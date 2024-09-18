import React from "react";
import { useSelector } from "react-redux";
import useGetPlaylist from "../../hooks/useGetPlaylists";
import NoData from "../../components/errorPages/NoData";
import NoDataLayout from "../../components/errorPages/NoDataLayout";

const Playlists = () => {
  const { user } = useSelector((store) => store.auth);
  const { data, status } = useGetPlaylist(user?._id);

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>Error</h1>;
  console.log(data);
  

  return (
    <div>
      {data?.data?.length === 0 && (
        <NoDataLayout>
          <NoData message="No playlist created" />
        </NoDataLayout>
      )}
    </div>
  );
};

export default Playlists;
