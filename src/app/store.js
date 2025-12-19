import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice/postSlice"

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
