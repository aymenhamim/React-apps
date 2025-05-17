import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: null,
  isLoading: false,
  error: null,
};

const API_BASE_URL = "http://127.0.0.1:8000/api/";
// const token = localStorage.getItem('authToken');

// ! Common headers
const axiosConfig = {
  headers: {
    // Authorization: `Bearer ${token}`,
    Accept: "application/json",
  },
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${API_BASE_URL}products/`, axiosConfig);

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${API_BASE_URL}products/${id}/`, axiosConfig);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async ({ id, productData }, thunkAPI) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}products/${id}/`,
        productData,
        axiosConfig
      );

      if (response.status !== 200) {
        throw new Error("Failed to update product");
      }

      fetchProducts();

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    findProduct: (state, action) => {
      const product = state.products?.find(
        (product) => product.id === action.payload
      );

      return product;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // ? Delete item

    builder
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(editProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        // Find the index of the product being updated
        // const index = state.products.findIndex(
        //   (product) => product.id === action.payload.id
        // );

        // If the product exists in the state, update it
        // if (index !== -1) {
        //   state.products[index] = action.payload;
        // }
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // ? Edit item
  },
});

export default productsSlice.reducer;

export const { findProduct } = productsSlice.actions;
