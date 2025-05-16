import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import authService from "../../services/authService";

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  isAdmin: false,
  error: null,
  counter: 0,
};

// Async thunk for login
// export const loginAdmin = createAsyncThunk(
//   "auth/loginAdmin",
//   async (credentials, thunkAPI) => {
//     try {
//       return await authService.login(credentials);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();

//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// Async thunk for logout
export const logoutAdmin = createAsyncThunk("auth/logoutAdmin", async () => {
  await authService.logout();
});

// Async thunk for checking admin status
// export const checkAdminStatus = createAsyncThunk(
//   "auth/checkAdminStatus",
//   async (_, thunkAPI) => {
//     try {
//       return await authService.checkAdminStatus();
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

    increment: (state) => {
      state.counter += 1;
    },

    decrement: (state) => {
      state.counter -= 1;
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

export const { reset, increment, decrement } = authSlice.actions;
export default authSlice.reducer;
