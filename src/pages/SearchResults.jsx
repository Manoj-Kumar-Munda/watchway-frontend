import React from "react";
import { useSearchParams } from "react-router-dom";
import HorizontalVideoCard from "../components/HorizontalVideoCard";
import NotFound from "../components/errorPages/NotFound";
import { useInView } from "react-intersection-observer";
import useSearch from "../hooks/useSearch";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const { ref, inView } = useInView();

  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useSearch(search);

  //create skeletonUi for loading state

  return (
    <div className="flex flex-col gap-4">
      {data?.pages?.map((page) => {
        if (page?.data?.docs?.length === 0) {
          return (
            <div className="my-8">
              <NotFound errorMsg={"No Video found"} />
            </div>
          );
        }
        return page?.data?.docs?.map((video) => (
          <HorizontalVideoCard
            key={video?._id}
            video={video}
            showAvatar={true}
          />
        ));
      })}

      <div className="flex justify-center my-4">
        <button
          ref={ref}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load Newer"
            : ""}
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
