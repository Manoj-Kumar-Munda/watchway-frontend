import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axios";

const updateThumbnail = async ({ id, data }) => {
  return await request({
    url: `/videos/change-thumbnail/${id}`,
    method: "PATCH",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const useUpdateThumbnail = () => {
  return useMutation({
    mutationKey: ["update-thumbnail"],
    mutationFn: updateThumbnail,
  });
};

export default useUpdateThumbnail;
