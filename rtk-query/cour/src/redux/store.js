import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import postsReducer from "./postsSlice/postSlice";
import { jsonPlaceholderApi } from "../services/jsonPlaceHolderApi";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    // RTK Query
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});

setupListeners(store.dispatch);

export default store;
