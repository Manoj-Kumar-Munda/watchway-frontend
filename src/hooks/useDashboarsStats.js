import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axios";

const getStats = async () => {
  return request({ url: "/dashboard/stats", method: "GET" });
};

const useDashboardStats = () => {
  return useQuery({
    queryKey: ["stats"],
    queryFn: getStats,
  });
};

export default useDashboardStats;
