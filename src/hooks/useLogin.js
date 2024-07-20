import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axios-utils";

const loginUser = async(user) => {
  return await request({ url: "/users/login", method: "post", data: user });
};

const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
  });
};

export default useLogin;