import { createSlice } from "@reduxjs/toolkit";
import { fetchAllPosts, fetchSubredditPost } from "../../../api/allposts";

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
      // Status cases for fetching all posts
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
        state.subreddit = [];
        state.error = action.error;
      })

      // Status cases for fetching specific subreddit posts
      .addCase(fetchSubredditPost.pending, (state, _) => {
        state.status = "loading";
      })
      .addCase(fetchSubredditPost.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.allPost = action.payload.posts;
      })
      .addCase(fetchSubredditPost.rejected, (state, action) => {
        state.status = "failed";
        state.allPost = [];
        state.subreddit = [];
        state.error = action.error;
      });
  },
});

export const selectStatus = (state) => state.post.status;
export const selectAllPost = (state) => state.post.allPost;
export const selectError = (state) => state.post.error;
export const selectSubreddit = (state) => state.post.subreddit;

export default postSlice.reducer;
