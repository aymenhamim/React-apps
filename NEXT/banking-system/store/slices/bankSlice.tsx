import api from "@/lib/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Account } from "@/types/account";
import { Transaction } from "@/types/transactions";
import { User } from "@/types/user";

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
  isNeedsFetch: boolean;
}

const initialState: StateType = {
  account: null,
  filteredTransactions: [],
  recentTransactions: [],
  customers: [],
  isAuth: false,
  loading: false,
  error: null,
  isNeedsFetch: true,
};

export const getTransactions = createAsyncThunk(
  "/bank/transactions",
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

    return amount;
    // return res.data;
  }
);

export const postWithdraw = createAsyncThunk(
  "/bank/withdraw",
  async (amount: number, thunkAPI) => {
    const res = await api.post("/api/transactions/withdraw", {
      amount,
      currency: "DH",
    });

    return amount;
    // return res.data;
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
        state.isNeedsFetch = false;
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
        state.isNeedsFetch = false;
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
        state.isNeedsFetch = false;
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
      .addCase(postDeposit.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.isNeedsFetch = true;

        const amount = Number(action.payload) || 1;
        if (state.account) {
          state.account.balance = (state.account.balance ?? 0) + +amount;
        }
      })
      .addCase(postDeposit.rejected, (state) => {
        state.loading = false;
        state.error = null;
      });

    /// ! withdraw

    builder
      .addCase(postWithdraw.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postWithdraw.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.isNeedsFetch = true;

        const amount = Number(action.payload) || 1;
        if (state.account) {
          state.account.balance = (state.account.balance ?? 0) - +amount;
        }
      })
      .addCase(postWithdraw.rejected, (state) => {
        state.loading = false;
        state.error = null;
      });
  },
});

export default bankSlice.reducer;
