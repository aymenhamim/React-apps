import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/slices/authSlice";
import productsReducer from "@/store/slices/productsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
  },
});
