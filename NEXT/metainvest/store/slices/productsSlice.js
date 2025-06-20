import { deleteImageFromUrl } from "@/lib/images";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: null,
  isLoading: false,
  error: null,
  currentPage: 1,
  lastPage: 1,
  product: null,
};

export const axiosInstance = axios.create({
  withCredentials: true,
  withXSRFToken: true,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
});

// headers: {
//   Accept: "application/json",
//   "Content-Type": "application/json",
// },

const API_BASE_URL = "http://127.0.0.1:8000/api/";

// ! Common headers
export const axiosConfig = {
  headers: {
    // Authorization: `Bearer ${token}`,
    Accept: "application/json",
  },
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (page, thunkAPI) => {
    try {
      // await axiosInstance.get(
      //   `${process.env.NEXT_PUBLIC_LARAVEL_API_URL}/sanctum/csrf-cookie`
      // );

      const response = await fetch(`${API_BASE_URL}products?page=${page}`);

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(`${API_BASE_URL}products/${id}`);

      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, thunkAPI) => {
    const product = thunkAPI
      .getState()
      .products.products.find((product) => product.id === id);

    try {
      // product.images.forEach((image) => {
      //   if (image) {
      //     const publicId = image.split("/").pop().split(".")[0];
      //     const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/destroy`;
      //     const data = {
      //       token: process.env.NEXT_CLOUDINARY_API_KEY,
      //       public_id: publicId,
      //     };

      //     axios.post(url, data).then((response) => {
      //       console.log("Image deleted successfully:", response.data);
      //     });
      //   }
      // });

      product.images.forEach((image) => {
        if (image.length > 0) {
          console.log(process.env.NEXT_CLOUDINARY_API_KEY);

          deleteImageFromUrl(image, process.env.NEXT_CLOUDINARY_API_KEY);
        }
      });

      await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_LARAVEL_API_URL}/sanctum/csrf-cookie`
      );

      await axiosInstance.delete(
        `${process.env.NEXT_PUBLIC_LARAVEL_API_URL}/api/products/${id}`
      );

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
      await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_LARAVEL_API_URL}/sanctum/csrf-cookie`
      );

      const response = await axiosInstance.put(
        `${process.env.NEXT_PUBLIC_LARAVEL_API_URL}/api/products/${id}`,
        productData
      );

      if (response.status !== 200) {
        throw new Error("Failed to update product");
      }

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (productData, thunkAPI) => {
    try {
      await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_LARAVEL_API_URL}/sanctum/csrf-cookie`
      );

      const response = await axiosInstance.post(
        `${process.env.NEXT_PUBLIC_LARAVEL_API_URL}/api/products`,
        productData
      );

      if (response.status !== 200) {
        throw new Error("Failed to create product");
      }

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
    setPage(state, action) {
      state.currentPage = action.payload;
    },
  },

  extraReducers: (builder) => {
    // ! Fetch products
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.data;

        state.currentPage = action.payload.current_page;
        state.lastPage = action.payload.last_page;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // ? Delete product

    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
        state.error = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // ? Delete product

    builder
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = state.products?.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // ? Edit product

    builder
      .addCase(editProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // ? Create product

    builder
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export default productsSlice.reducer;

export const { findProduct, setPage } = productsSlice.actions;
