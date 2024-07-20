import { useMutation } from "@tanstack/react-query";
import { request } from "../utils/axios-utils";
import { queryClient } from "../main";

const logout = async () => {
  return await request({ url: "/users/logout", method: "post" });
};

const useLogout = () => {
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["current-user"] });
    },
  });
};

export default useLogout;
