import React from "react";
import DashboardRow from "./DashboardRow";

const Table = () => {
  return (
    <div className="border my-4">
      <table className="min-w-full">
        <tr>
          <th className="text-start" scope="col"></th>
          <th className="text-start" scope="col">
            Status
          </th>
          <th className="text-start" scope="col">
            Content
          </th>
          <th className="text-start" scope="col">
            Likes
          </th>
          <th className="text-start" scope="col">
            Date
          </th>
        </tr>

        <DashboardRow />
      </table>
    </div>
  );
};

export default Table;
