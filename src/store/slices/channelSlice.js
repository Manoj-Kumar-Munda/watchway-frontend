import { createSlice } from "@reduxjs/toolkit";

const channelSlice = createSlice({
  name: "channel",
  initialState: {
    currentChannel: null,
    isAuthorized: false,
  },
  reducers: {
    setCurrentChannel: (state, action) => {
      state.currentChannel = action.payload;
    },
    setIsAuthorized: (state, action) => {
      state.isAuthorized = action.payload;
    },
  },
});

export const { setCurrentChannel, setIsAuthorized } = channelSlice.actions;
export default channelSlice.reducer;
