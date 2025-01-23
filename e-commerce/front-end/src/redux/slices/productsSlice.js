import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    data: [],
    error: ''
}

const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const res = await fetch('');
    return res.json()
})

const productsSlice = createSlice({

    name: 'products',
    initialState: {
        isLoading: false,
        data: [],
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})

const ProductsReducer = productsSlice.reducer
export default ProductsReducer

console.log(productsSlice)