import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";
import { queryClient } from "../main";
import { useSelector } from "react-redux";

const uploadVideo = async (data) => {
  return await request({ url: "/videos", method: "post", data });
};
const useUpload = () => {
  const { currentChannel } = useSelector((store) => store.channel);
  return useMutation({
    mutationKey: ["upload"],
    mutationFn: uploadVideo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["videos", currentChannel?._id],
      });
    },
  });
};

export default useUpload;
