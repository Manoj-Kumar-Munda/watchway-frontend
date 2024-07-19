import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axios-utils";

const signup = async (data) => {
  return await request({
    url: "/users/register",
    method: "post",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

};

const useRegister = () => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: signup,
  });
};

export default useRegister;
