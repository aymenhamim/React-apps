const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  data: [],
  isModalOpen: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openAuthModal(state) {
      state.isModalOpen = true;
    },

    closeAuthModal(state) {
      state.isModalOpen = false;
    },
  },
});

export const { openAuthModal, closeAuthModal } = authSlice.actions;
export default authSlice.reducer;
