import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    isMenuOpen: true,
    isSmSidebarOpen: false,
    uploadStatus: null,
  },
  reducers: {
    toggleMenu: (state, action) => {
      if (action.payload) {
        state.isMenuOpen = action.payload;
        return;
      }
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleSmSidebar: (state, action) => {
      if (action.payload) {
        state.isSmSidebarOpen = action.payload;
        return;
      }
      state.isSmSidebarOpen = !state.isSmSidebarOpen;
    },
    setUploadStatus: (state, action) => {
      state.uploadStatus = action.payload;
    },
  },
});

export const { toggleMenu, toggleSmSidebar, setUploadStatus } =
  appSlice.actions;
export default appSlice.reducer;
