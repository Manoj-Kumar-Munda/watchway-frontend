import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    isMenuOpen: true,
    isSmSidebarOpen: false,
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
  },
});

export const { toggleMenu, toggleSmSidebar } = appSlice.actions;
export default appSlice.reducer;
