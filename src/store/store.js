import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import appSlice from "./slices/appSlice";
import channelSlice from "./slices/channelSlice";
import modalsReducer from "./slices/modalsSlice";
import videoReducer from "./slices/videosSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    app: appSlice,
    channel: channelSlice,
    modals: modalsReducer,
    videos: videoReducer
  },
});

export default store;
