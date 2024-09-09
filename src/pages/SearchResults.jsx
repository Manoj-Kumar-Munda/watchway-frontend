import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HorizontalVideoCard from "../components/HorizontalVideoCard";
import NotFound from "../components/errorPages/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { addVideos, updateResults } from "../store/slices/videosSlice";
import { request } from "../utils/axiosConfig";

const getSearchResults = async ({ search, sortOrder, sortBy, page, limit }) => {
  console.log(search, sortOrder, sortBy, page, limit);

  return await request({
    url: `/videos/search?query=${search}&sortBy=${sortBy}&sortOrder=${sortOrder}&page=${page}&limit=${limit}`,
    method: "GET",
  });
};

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [isError, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const search = searchParams.get("search");
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  const sortOrder = searchParams.get("sortOrder");
  const sortBy = searchParams.get("sortBy");
  const dispatch = useDispatch();

  useEffect(() => {
    getSearchResults({ search, sortOrder, sortBy, page, limit })
      .then((res) => {
        if (res.success) {
          dispatch(updateResults(res?.data?.docs));
          setIsLoading(false);
          setError(null);
        }
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
      });
  }, [search]);

  const { results } = useSelector((store) => store.videos);

  if (isLoading) {
    return (
      <div className="absolute inset-0 grid place-content-center">
        <div className="loader"></div>
      </div>
    );
  }
  if ( isError || results?.length === 0) {
    return (
      <div className="absolute inset-0 grid place-content-center">
        <NotFound
          errorMsg={`${isError ? "Some error occurred" : "No videos found"} `}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {results?.map((video) => (
        <div key={video._id}>
          <HorizontalVideoCard video={video} showAvatar={true} />
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
