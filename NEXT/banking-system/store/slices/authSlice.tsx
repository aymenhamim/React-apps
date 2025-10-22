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
    const res = await api.post("/login", data);

    return res.data;
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
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default authSlice.reducer;
