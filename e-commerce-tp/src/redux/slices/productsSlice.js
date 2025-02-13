// import createAsyncThunk createSlice
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// initial state

const initialState = {
  isLoading: false,
  data: [],
  error: '',
  product: {},
};

// fetch products with createAsyncThunck
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const res = await fetch('http://localhost:3000/products');
    return res.json();
  },
);

// fetch product by id

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async id => {
    const res = await fetch(`http://localhost:3000/products/${id}`);
    return res.json();
  },
);

// productSlice

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    isLoading: false,
    data: [],
    error: '',
    product: {},
    cart: { cartQuantity: 0, cartItem: [] },
  },
  reducers: {
    addToCart(state, action) {
      const newProduct = state.cart.cartItem.find(
        cartItem => cartItem.id === action.payload,
      );
      if (cartItem) {
        state.cart.cartQuantity += 1;
      } else {
        state.cart.push(cartItem);
      }
    },
  },

  // extra reducers
  extraReducers: builder => {
    // fetch all products cases
    builder.addCase(fetchProducts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // fetch by Id cases
    builder.addCase(fetchProductById.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
