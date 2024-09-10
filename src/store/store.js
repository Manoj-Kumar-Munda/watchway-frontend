import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import appSlice from "./slices/appSlice";
import channelSlice from "./slices/channelSlice";
import modalsReducer from "./slices/modalsSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    app: appSlice,
    channel: channelSlice,
    modals: modalsReducer,
  },
});

export default store;
