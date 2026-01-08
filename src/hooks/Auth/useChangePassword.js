import { useMutation } from "@tanstack/react-query";
import { request } from "../../utils/axios";

const changePassword = async (data) => {
  return await request({
    url: "/users/change-password",
    method: "POST",
    data,
  });
};

const useChangePassword = () => {
  return useMutation({
    mutationKey: ["change-password"],
    mutationFn: changePassword,
  });
};

export default useChangePassword;
