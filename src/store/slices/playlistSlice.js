import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    currentPlaylist: null,
    isAuthorized: false,
    isUpdatePlaylist: false,
  },
  reducers: {
    setCurrentPlaylist: (state, action) => {
      state.currentPlaylist = action.payload;
    },
    setIsAuthorized: (state, action) => {
      state.isAuthorized = action.payload;
    },

    setToDefault: (state, action) => {
      state.currentPlaylist = null;
      state.isAuthorized = null;
    },
    toggleIsUpdatePlaylist: (state, action) => {
      state.isUpdatePlaylist = !state.isUpdatePlaylist;
    }
  },
});

export const { setCurrentPlaylist, setIsAuthorized, setToDefault, toggleIsUpdatePlaylist } =
  playlistSlice.actions;
export default playlistSlice.reducer;
