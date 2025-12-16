import { createSlice } from "@reduxjs/toolkit";
import { fetchAllPosts } from "../../api/allposts";

const postSlice = createSlice({
  name: "post",
  initialState: {
    status: "uninitialized",
    allPost: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.allPost = action.payload;
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.status = "failed";
        state.allPost = [];
        state.error = action.error;
      });
  },
});


