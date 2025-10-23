import useGetPlaylist from "../hooks/useGetPlaylists";
import PlaylistCard from "../components/Playlist/PlaylistCard";
import DotLoader from "../components/Loaders/DotLoader";
import { useSelector } from "react-redux";

const MyCollections = () => {
  const { user } = useSelector((store) => store.auth);
  
  const { data, status } = useGetPlaylist(user?._id);
  
  if (status === "pending") return <DotLoader />;
  // if(data?.data?.length === 0) return

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
