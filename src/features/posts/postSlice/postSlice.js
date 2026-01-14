import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchAllPosts,
  fetchSubredditPost,
} from "../../../api/redditAPI";

const handlePending = (state) => {
  state.status = "loading";
};

const handleRejected = (state, action) => {
  state.status = "failed";
  state.allPost = [];
  state.subreddit = [];
  state.error = action.error;
};

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
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.allPost = action.payload.posts;
        state.subreddit = action.payload.subreddit;
      })

      // Status cases for fetching specific subreddit posts
      .addCase(fetchSubredditPost.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.allPost = action.payload.posts;
      })

      // handles all pending fetch calls
      .addMatcher(
        isAnyOf(
          fetchAllPosts.pending,
          fetchSubredditPost.pending,
        ),
        handlePending
      )

      .addMatcher(
        isAnyOf(
          fetchAllPosts.rejected,
          fetchSubredditPost.rejected,
        ),
        handleRejected
      );
  },
});

export const selectStatus = (state) => state.post.status;
export const selectAllPost = (state) => state.post.allPost;
export const selectError = (state) => state.post.error;
export const selectSubreddit = (state) => state.post.subreddit;

export default postSlice.reducer;
