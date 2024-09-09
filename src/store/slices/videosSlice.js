import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videoSlice",
  initialState: {
    results: [],
  },
  reducers: {
    addVideos: (state, action) => {
      state.results = state.results.concat(action.payload);
    },

    updateResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { addVideos, updateResults } = videosSlice.actions;
export default videosSlice.reducer;
