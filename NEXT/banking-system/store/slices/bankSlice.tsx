import { fetchTransactions } from "@/api/transactions";
import api from "@/lib/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Account } from "@/types/account";
import { Transaction } from "@/types/transactions";
import { User } from "@/types/user";

const API_BASE_URL = "http://127.0.0.1:8000/";

interface fetchTransactionsType {
  customer?: string;
  type?: string;
  limit?: string;
}

interface StateType {
  account: Account | null;
  filteredTransactions: Transaction[];
  recentTransactions: Transaction[];
  customers: User[];
  isAuth: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: StateType = {
  account: null,
  filteredTransactions: [],
  recentTransactions: [],
  customers: [],
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
    return res.data;
  }
);

export const getAccount = createAsyncThunk(
  "/bank/account",
  async (_, thunkAPI) => {
    const res = await api.get("api/account");

    return res.data;
  }
);

export const getCustomers = createAsyncThunk(
  "/bank/customers",
  async (_, thunkAPI) => {
    const res = await api.get("/api/users");

    return res.data;
  }
);

export const postDeposit = createAsyncThunk(
  "/bank/deposit",
  async (amount: number, thunkAPI) => {
    const res = await api.post("/api/transactions/deposit", {
      amount,
      currency: "DH",
    });

    return res.data;
  }
);

export const postWithdraw = createAsyncThunk(
  "/bank/deposit",
  async (amount: number, thunkAPI) => {
    const res = await api.post("/api/transactions/withdraw", {
      amount,
      currency: "DH",
    });

    return res.data;
  }
);

const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /// ! fetch Transactions
    builder
      .addCase(getTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.recentTransactions = action.payload.transactions.data;
        state.error = null;
      })
      .addCase(getTransactions.rejected, (state) => {
        state.loading = false;
        // state.error = null;
      });

    /// ! fetch Account

    builder
      .addCase(getAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.account = action.payload.data;
      })
      .addCase(getAccount.rejected, (state) => {
        state.loading = false;
      });

    /// ! fetch Customers

    builder
      .addCase(getCustomers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCustomers.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = action.payload.users;
        console.log(action.payload.users);
      })
      .addCase(getCustomers.rejected, (state) => {
        state.loading = false;
      });

    /// ! deposit
    builder
      .addCase(postDeposit.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postDeposit.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(postDeposit.rejected, (state) => {
        state.loading = false;
        state.error = null;
      });
    /// ! withdraw
  },
});

export default bankSlice.reducer;
