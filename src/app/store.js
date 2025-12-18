import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/searchSlice/searchSlice";
import postReducer from "../features/postSlice/postSlice"

export const store = configureStore({
  reducer: {
    search: searchReducer,
    post: postReducer,
  },
});
