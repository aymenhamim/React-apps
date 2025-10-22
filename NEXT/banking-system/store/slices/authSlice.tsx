import api from "@/lib/axios";
import { Account } from "@/types/account";
import { Transaction } from "@/types/transactions";
import { User } from "@/types/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_BASE_URL = "http://127.0.0.1:8000/";

interface LoginData {
  email: string;
  password: string;
}

export const login = createAsyncThunk<User, LoginData>(
  "auth/login",
  async (data: LoginData, thunkAPI) => {
    try {
      const res = await api.post("/login", data);
      return res.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Extract the error message from the response
      if (error.response) {
        // Server responded with an error
        return thunkAPI.rejectWithValue(
          error.response.data.message || error.response.data.error
        );
      }
      // Network error or other issues
      return thunkAPI.rejectWithValue("Network error. Please try again.");
    }
  }
);

interface AuthState {
  user: User | null;
  account: Account | null;
  filteredTransactions: Transaction[] | null;
  recentTransactions: Transaction[] | null;
  isAuth: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  account: null,
  filteredTransactions: [],
  recentTransactions: [],
  isAuth: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Login failed";
      });
  },
});

export default authSlice.reducer;
