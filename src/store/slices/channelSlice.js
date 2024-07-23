import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentChannel: null,
  isAuthoized: false,
};

const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    setCurrentChannel: (state, action) => {
      state.currentChannel = action.payload;
    },
    setAuthorization: (state, action) => {
      state.isAuthoized = action.payload;
    },
  },
});

export const { setCurrentChannel, setAuthorization } = channelSlice.actions;
export default channelSlice.reducer;
