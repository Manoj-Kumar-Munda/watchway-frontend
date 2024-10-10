import React from "react";
import ToggleBtn from "./ToggleBtn";
import { nanoid } from "@reduxjs/toolkit";
import { formateDate } from "../../utils/helpers";
import DeleteBtn from "./DeleteBtn";

const DashboardRow = ({ videos }) => {
  return (
    <tbody>
      {videos?.map((video) => (
        <tr
          key={nanoid()}
          className=" border-b border-white/10 last:border-b-transparent"
        >
          <td className="py-2.5  text-nowrap whitespace-nowrap px-2">
            <ToggleBtn video={video} />
          </td>
          <td className="py-2.5 text-nowrap whitespace-nowrap px-2">
            Published
          </td>

          <td className="py-2.5 text-nowrap whitespace-nowrap px-2">
            {video?.title}
          </td>
          <td className="py-2.5 text-nowrap whitespace-nowrap px-2">
            {video?.likes}
          </td>
          <td className="py-2.5 text-nowrap whitespace-nowrap px-2">
            {formateDate(video?.createdAt)}
          </td>

          <td className="flex gap-1 items-center whitespace-nowrap px-2 py-2.5">
            <DeleteBtn videoId={video?._id} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default DashboardRow;
