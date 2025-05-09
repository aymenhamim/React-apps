import productsSlice from "@/redux/slices/productsSlice";
import authSlice from "@/redux/slices/authSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: { products: productsSlice, auth: authSlice },
});

export default store;
