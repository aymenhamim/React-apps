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

//! Export types (for typescript)
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
