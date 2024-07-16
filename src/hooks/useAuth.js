import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axios-utils";

const loginUser = async(user) => {
    console.log(user);
  return await request({ url: "/users/login", method: "post", data: user });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};
