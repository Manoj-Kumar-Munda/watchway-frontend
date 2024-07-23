import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axiosConfig";
import { queryClient } from "../main";

const loginUser = async (user) => {
  return await request({ url: "/users/login", method: "post", data: user });
};

const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: (data) => {
      queryClient.setQueryData(["current-user"], data);
    },
  });
};

export default useLogin;
