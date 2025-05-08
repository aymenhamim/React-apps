import productsSlice from '@/redux/slices/productsSlice'

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({ reducer: { products: productsSlice } });

export default store;