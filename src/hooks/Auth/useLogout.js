import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../main";
import { request } from "../../utils/axiosConfig";

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
