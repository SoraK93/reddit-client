import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchAllPosts,
  fetchPostComments,
  fetchSubredditPost,
} from "../../../api/redditAPI";

const handlePending = (state) => {
  state.status = "loading";
  state.allPost = [];
  state.current = {
    post: {},
    comments: [],
  };
  state.error = null;
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
    current: {
      post: {},
      comments: [],
    },
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

      .addCase(fetchPostComments.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.current = {
          post: action.payload.post,
          comments: action.payload.comments,
        };
        state.error = null;
      })

      // handles all pending fetch calls
      .addMatcher(
        isAnyOf(
          fetchAllPosts.pending,
          fetchSubredditPost.pending,
          fetchPostComments.pending
        ),
        handlePending
      )

      .addMatcher(
        isAnyOf(
          fetchAllPosts.rejected,
          fetchSubredditPost.rejected,
          fetchPostComments.rejected
        ),
        handleRejected
      );
  },
});

export const selectStatus = (state) => state.post.status;
export const selectAllPost = (state) => state.post.allPost;
export const selectSubreddit = (state) => state.post.subreddit;
export const selectCurrentPost = (state) => state.post.current;
export const selectError = (state) => state.post.error;

export default postSlice.reducer;
