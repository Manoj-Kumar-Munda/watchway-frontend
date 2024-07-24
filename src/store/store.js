import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import appSlice from "./slices/appSlice";
import channelSlice from "./slices/channelSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    app: appSlice,
    channel: channelSlice,
  },
});

export default store;
