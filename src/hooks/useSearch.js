import { useInfiniteQuery } from "@tanstack/react-query";
import { request } from "../utils/axios";

const useSearch = (search) => {
  return useInfiniteQuery({
    queryKey: ["SearchResults", search],
    queryFn: async ({ pageParam }) => {
      return await request({
        url: `/videos/search?query=${search}&page=${pageParam}`,
        method: "GET",
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (!lastPage?.data?.hasNextPage) return undefined;
      return lastPage?.data?.page + 1;
    },
    getPreviousPageParam: (firstPage, allPages, allPageParam) => {
      if (!firstPage?.data?.hasPrevPage) {
        return undefined;
      }
      return firstPage?.page - 1;
    },
  });
};

export default useSearch;
