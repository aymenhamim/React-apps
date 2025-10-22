import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "@/store/slices/bankSlice";
import authReducer from "@/store/slices/authSlice";

const store = configureStore({
  reducer: {
    bank: bankReducer,
    auth: authReducer,
  },
});

export default store;
