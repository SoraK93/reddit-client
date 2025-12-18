import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/searchSlice/searchSlice";
import postReducer from "../features/posts/postSlice/postSlice"

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
