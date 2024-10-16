import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    id: null,
  },
  reducers: {
    setCurrentVideo: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setCurrentVideo } = videoSlice.actions;
export default videoSlice.reducer;
