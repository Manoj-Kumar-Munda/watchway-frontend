import React from "react";
import useDashboardStats from "../../hooks/useDashboarsStats";

const Metrics = () => {
  const { data } = useDashboardStats();
  return (
    <div className="flex mt-8 gap-2 sm:gap-4 items-center">
      <div className="flex-1 dashboard-card inline-flex flex-col w-full text-black px-2 py-6">
        <h1 className="font-medium">Views</h1>
        <span className="text-3xl font-semibold">
          {data?.data?.stats?.totalViews}
        </span>
      </div>

      <div className="flex-1 dashboard-card inline-flex flex-col w-full text-black px-2 py-6">
        <h1 className="font-medium">Subscribers</h1>
        <span className="text-3xl font-semibold">
          {data?.data?.subscribersCount}
        </span>
      </div>

      <div className="flex-1 dashboard-card inline-flex flex-col w-full text-black px-2 py-6">
        <h1 className="font-medium">Likes</h1>
        <span className="text-3xl font-semibold">
          {data?.data?.stats?.totalLikes}
        </span>
      </div>
    </div>
  );
};

export default Metrics;
