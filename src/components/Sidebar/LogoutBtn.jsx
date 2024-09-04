import React from "react";
import { FiLogOut } from "react-icons/fi";
import useLogout from "../../hooks/Auth/useLogout"
const LogoutBtn = () => {
  const { mutate } = useLogout();

  const logoutUser = () => {
    mutate();
  };

  return (
    <button
      onClick={logoutUser}
      className="inline-flex gap-4 py-2.5 rounded-xl absolute max-w-48 w-full bottom-6 bg-red-500 transition-colors duration-300 hover:bg-red-500/85"
    >
      <div className="pl-4 bg-transparent mix-blend-color-dodge">
        <FiLogOut size={24} color="white" />
      </div>
      <span className="font-Roboto text-white bg-transparent">Logout</span>
    </button>
  );
};

export default LogoutBtn;
