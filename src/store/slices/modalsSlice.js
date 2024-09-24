import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  upload: false,
  edit: false,
  createPlaylist: false,
  updatePlaylist: false,
  deletePlaylist: false,
  updateCover: false
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state[action.payload]= true;
    },
    closeModal: (state, action) => {
      state[action.payload] = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
