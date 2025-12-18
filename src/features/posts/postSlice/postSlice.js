import { createSlice } from "@reduxjs/toolkit";
import { fetchAllPosts } from "../../../api/allposts";

const postSlice = createSlice({
  name: "post",
  initialState: {
    status: "uninitialized",
    allPost: [],
    subreddit: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.pending, (state, _) => {
        state.status = "loading";
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.allPost = action.payload.posts;
        state.subreddit = action.payload.subreddit;
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.status = "failed";
        state.allPost = [];
        state.error = action.error;
      });
  },
});

export const selectStatus = (state) => state.post.status;
export const selectAllPost = (state) => state.post.allPost;
export const selectError = (state) => state.post.error;
export const selectSubreddit = (state) => state.post.subreddit;

export default postSlice.reducer;
