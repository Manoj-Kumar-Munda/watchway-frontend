import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../main";
import { request } from "../../utils/axios";

const loginUser = async (user) => {
  return await request({ url: "/users/login", method: "post", data: user });
};

const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: (data) => {
      // Transform login response to match current-user response format
      // Login returns { data: { loggedInUser, ... } } but current-user returns { data: user }
      const transformedData = {
        ...data,
        data: data?.data?.loggedInUser,
      };
      queryClient.setQueryData(["current-user"], transformedData);
    },
  });
};

export default useLogin;
