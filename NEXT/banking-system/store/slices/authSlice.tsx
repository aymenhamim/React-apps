import api from "@/lib/axios";
import { Account } from "@/types/account";
import { Transaction } from "@/types/transactions";
import { User } from "@/types/user";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

//! Load user from localStorage on initialization
const loadUserFromStorage = (): User | null => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
  return null;
};

interface LoginData {
  email: string;
  password: string;
}

export const login = createAsyncThunk<User, LoginData>(
  "auth/login",
  async (data: LoginData, thunkAPI) => {
    try {
      await api.get("/sanctum/csrf-cookie");
      const res = await api.post("/login", data);

      //! save user to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("isAuth", JSON.stringify(true));
      }

      return res.data.user;
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

export const logout = createAsyncThunk("auth/logout", async (thunkAPI) => {
  const res = await api.post("/logout");

  //! Clear localStorage
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuth");
  }

  return res.data;
});

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
  user: loadUserFromStorage(),
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
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
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
        state.isAuth = true;
        console.log(action.payload);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Login failed";
      });

    //logout

    builder
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.user = null;
        state.isAuth = false;
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
export const { setUser } = authSlice.actions;
