import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axios";
import { queryClient } from "../main";

const updateProfile = async (data) => {
  return await request({
    url: "/users//update-account",
    method: "PATCH",
    data,
  });
};

const useUpdateProfile = () => {
  return useMutation({
    mutationKey: ["update-profile"],
    mutationFn: updateProfile,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["channel", data?.data?._id],
      });
    },
  });
};

export default useUpdateProfile;
