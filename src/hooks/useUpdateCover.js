import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axios";
import { queryClient } from "../main";
import { useSelector } from "react-redux";

const updateCover = async (data) => {
  return await request({
    url: "/users/cover",
    method: "PATCH",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const useUpdateCover = () => {
  const { currentChannel } = useSelector((store) => store.channel);
  return useMutation({
    mutationKey: ["update-cover"],
    mutationFn: updateCover,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["channel", currentChannel?._id],
      }),
  });
};

export default useUpdateCover;
