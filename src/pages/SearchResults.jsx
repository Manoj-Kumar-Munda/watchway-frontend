import React from "react";
import { useSearchParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import HorizontalVideoCard from "../components/HorizontalVideoCard";
import NotFound from "../components/errorPages/NotFound";

const SearchResults = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  const sortOrder = searchParams.get("sortOrder");
  const sortBy = searchParams.get("sortBy");

  const { data, status } = useSearch({
    search,
    page,
    limit,
    sortOrder,
    sortBy,
  });

  if (status === "pending") return <div>Loading...</div>;
  if (status === "error") return <div>Error</div>;

  if (data?.data?.docs?.length === 0) {
    return <div className="absolute inset-0 grid place-content-center"><NotFound errorMsg={"No videos found"} /></div>;
  }

  console.log(data);

  const { data: searchResults } = data;
  console.log(searchResults);

  return (
    <div className="flex flex-col gap-4">
      {searchResults?.docs?.map((video) => (
        <div key={video._id}>
          <HorizontalVideoCard video={video} showAvatar={true} />
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
