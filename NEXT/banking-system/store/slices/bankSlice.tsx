import { fetchTransactions } from "@/api/transactions";
import api from "@/lib/axios";
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

// export const getTransactions = createAsyncThunk(
//   "transactions/get",
//   async (page, thunkAPI) => {
//     try {
//       //   const res = await fetch(`${API_BASE_URL}products?page=${page}`);
//       const res = await fetchTransactions({});

//       if (!res.ok) {
//         throw new Error("Failed to fetch products");
//       }

//       const data = await res.json();

//       return data;
//     } catch (error) {
//       console.log(error.message);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {},
});

export default bankSlice.reducer;
