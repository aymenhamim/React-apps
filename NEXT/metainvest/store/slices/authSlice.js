import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import authService from "../../services/authService";

const API_BASE_URL = "/backend";

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  isAdmin: false,
  error: null,
};
// export const checkUserStatus = createAsyncThunk(
//   "auth/checkUserStatus",
//   async (_, thunkAPI) => {
//     try {
//       axiosInstance.get(`${API_BASE_URL}/user`);
//     } catch (error) {
//       return thunkAPI.rejectWithValue("Failed to verify admin status");
//     }
//   }
// );

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.error = null;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     // Login cases
  //     .addCase(loginAdmin.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = null;
  //     })
  //     .addCase(loginAdmin.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.isAuthenticated = true;
  //       state.user = action.payload;
  //       state.isAdmin = action.payload.isAdmin;
  //     })
  //     .addCase(loginAdmin.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //       state.isAuthenticated = false;
  //       state.user = null;
  //       state.isAdmin = false;
  //     })
  //     // Logout cases
  //     .addCase(logoutAdmin.fulfilled, (state) => {
  //       state.user = null;
  //       state.isAuthenticated = false;
  //       state.isAdmin = false;
  //     })
  //     // Check admin status cases
  //     .addCase(checkAdminStatus.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(checkAdminStatus.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.isAdmin = action.payload.isAdmin;
  //       if (action.payload.user) {
  //         state.user = action.payload.user;
  //         state.isAuthenticated = true;
  //       }
  //     })
  //     .addCase(checkAdminStatus.rejected, (state) => {
  //       state.isLoading = false;
  //       state.isAdmin = false;
  //     });
  // },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
