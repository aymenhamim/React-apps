import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_BASE_URL = "http://127.0.0.1:8000/";

const initialState = {
  user: null,
  account: null,
  filteredTransactions: [],
  recentTransactions: [],
  isAuth: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
