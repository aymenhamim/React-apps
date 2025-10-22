import { fetchTransactions } from "@/api/transactions";
import api from "@/lib/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_BASE_URL = "http://127.0.0.1:8000/";

interface fetchTransactionsType {
  customer?: string;
  type?: string;
  limit?: string;
}

const initialState = {
  account: null,
  filteredTransactions: [],
  recentTransactions: [],
  isAuth: false,
  loading: false,
  error: null,
};

export const getTransactions = createAsyncThunk(
  "transactions/get",
  async ({ limit = "10", type, customer }: fetchTransactionsType, thunkAPI) => {
    const res = await api.get(
      `http://localhost:8000/api/transactions?customer=${customer}&type=${type}&limit=${limit}`
    );
    return res;
  }
);

const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.recentTransactions = action.payload.data;
        state.error = null;
      })
      .addCase(getTransactions.rejected, (state) => {
        state.loading = false;
        // state.error = null;
      });
  },
});

export default bankSlice.reducer;
