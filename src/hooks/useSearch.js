import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";

const getSearchResults = async ({ search, sortOrder, sortBy, page, limit }) => {
  console.log(search, sortOrder, sortBy, page, limit);

  return await request({
    url: `/videos/search?query=${search}&sortBy=${sortBy}&sortOrder=${sortOrder}&page=${page}&limit=${limit}`, method: "GET"
  });
};

const useSearch = ({ search, page, limit, sortBy, sortOrder }) => {
  return useQuery({
    queryKey: ["search"],
    queryFn: () => getSearchResults({ search, page, limit, sortBy, sortOrder }),
  });
};

export default useSearch;
