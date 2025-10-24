import api from "@/lib/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Account } from "@/types/account";
import { Transaction } from "@/types/transactions";
import { User } from "@/types/user";

interface fetchTransactionsType {
  page?: string | number;
  customer?: string;
  type?: string;
  limit?: string;
}
interface PaginationType {
  next_page_url: string | null;
  prev_page_url: string | null;
  links: { active: boolean; label: string; page: number; url: string }[];
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
  pagination: PaginationType;
  filterParams: {
    page?: string | number;
    type?: string;
    customer?: string;
    perPage?: string;
  };
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
  pagination: {
    next_page_url: null,
    prev_page_url: null,
    links: [],
  },
  filterParams: {},
};

export const getTransactions = createAsyncThunk(
  "/bank/transactions",
  async (
    { page = "1", limit = "10", type, customer }: fetchTransactionsType,
    thunkAPI
  ) => {
    const res = await api.get(
      `http://localhost:8000/api/transactions?page=${page}&customer=${customer}&type=${type}&limit=${limit}`
    );
    return res.data;
  }
);

export const getFilteredTransactions = createAsyncThunk(
  "/bank/filteredTransactions",
  async (
    { page = "1", limit = "10", type, customer }: fetchTransactionsType,
    thunkAPI
  ) => {
    const res = await api.get(
      `http://localhost:8000/api/transactions?page=${page}&customer=${customer}&type=${type}&limit=${limit}`
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
  reducers: {
    setFilterParams(state, action) {
      const payload = action.payload || {};
      state.filterParams = {
        customer: payload.customer,
        page: payload.page,
        perPage: payload.perPage,
        type: payload.type,
      };
    },
  },
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
        // !
        state.pagination.prev_page_url =
          action.payload.transactions.prev_page_url;
        state.pagination.next_page_url =
          action.payload.transactions.next_page_url;
        state.pagination.links = action.payload.transactions.links;
      })
      .addCase(getTransactions.rejected, (state) => {
        state.loading = false;
        // state.error = null;
      });

    /// ! fetch Transactions
    builder
      .addCase(getFilteredTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFilteredTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.filteredTransactions = action.payload.transactions.data;
        state.error = null;
        state.isNeedsFetch = false;
        // !
        state.pagination.prev_page_url =
          action.payload.transactions.prev_page_url;
        state.pagination.next_page_url =
          action.payload.transactions.next_page_url;
        state.pagination.links = action.payload.transactions.links;
      })
      .addCase(getFilteredTransactions.rejected, (state) => {
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
          state.account.balance = state.account.balance + amount;
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

export const { setFilterParams } = bankSlice.actions;
