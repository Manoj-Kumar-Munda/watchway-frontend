import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import appSlice from "./slices/appSlice";
import channelSlice from "./slices/channelSlice";
import modalsReducer from "./slices/modalsSlice";
import playlistReducer from "./slices/playlistSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    app: appSlice,
    channel: channelSlice,
    modals: modalsReducer,
    playlist: playlistReducer,
  },
});

export default store;
