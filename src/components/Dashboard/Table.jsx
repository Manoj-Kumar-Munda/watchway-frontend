import React from "react";
import DashboardRow from "./DashboardRow";
import { useSelector } from "react-redux";
import useGetVideosStats from "../../hooks/useGetVideosStats";

const Table = () => {
  const { user } = useSelector((store) => store.auth);
  const { data, status } = useGetVideosStats();
  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <div className=" my-4 border border-white/10  rounded-xl bg-zinc-800 w-full  overflow-x-auto">
      <table className="min-w-full w-full">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-start px-2" scope="col"></th>
            <th className="text-start px-2 py-2.5" scope="col">
              Status
            </th>
            <th className="text-start px-2 py-2.5" scope="col">
              Content
            </th>
            <th className="text-start px-2 py-2.5" scope="col">
              Likes
            </th>
            <th className="text-start px-2 py-2.5" scope="col">
              Date
            </th>
            <th></th>
          </tr>
        </thead>

        <DashboardRow videos={data?.data} />
      </table>
    </div>
  );
};

export default Table;
