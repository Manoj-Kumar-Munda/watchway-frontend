import { createSlice } from "@reduxjs/toolkit";
import { queryClient } from "../../main";

const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isInitialized = true;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isInitialized = true;
      state.isAuthenticated = false;
      state.user = null;
      queryClient.clear();
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
