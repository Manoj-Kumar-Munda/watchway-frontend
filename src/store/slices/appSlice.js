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
    setSidebarsToDefault: (state, action) => {
      state.isMenuOpen = true;
      state.isSmSidebarOpen = false;
    },
    setUploadStatus: (state, action) => {
      if (action.payload === "error") {
        state.uploadStatus = "Failed to upload";
      }
      if (action.payload === "success") {
        state.uploadStatus = "Video uploaded";
      }
    },
  },
});

export const { toggleMenu, toggleSmSidebar, setUploadStatus, setSidebarsToDefault } =
  appSlice.actions;
export default appSlice.reducer;
