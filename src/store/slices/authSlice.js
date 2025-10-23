import { createSlice } from "@reduxjs/toolkit";
import { queryClient } from "../../main";

const initialState = {
  status: localStorage.getItem("accessToken") ? true : false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.user = action.payload?.loggedInUser;
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      localStorage.setItem(
        "user",
        JSON.stringify(action.payload?.loggedInUser)
      );
    },
    logout: (state, action) => {
      state.status = false;
      state.user = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      queryClient.clear();
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
