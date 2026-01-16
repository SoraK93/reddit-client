import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINT } from "./fetchLinks";

// Gets 10 hot & recent posts
const fetchAllPosts = createAsyncThunk("post/fetchAllPosts", async () => {
  let response, posts;

  try {
    response = await fetch(`${API_ENDPOINT}/all.json?sr_detail=1.json`);
    posts = (await response.json()).data.children;
  } catch (err) {
    console.error(err);
  }

  const subreddit = [];

  for (let post of posts) {
    const img = post.data.sr_detail;
    subreddit.push({
      id: img.name,
      thumbnail: {
        url:
          img.header_img ||
          img.icon_img ||
          img.community_icon?.replace(/&amp;/g, "&"),
      },
      name_prefix: post.data.subreddit_name_prefixed,
    });

    if (subreddit.length === 10) break;
  }

  return { posts, subreddit };
});

// Gets the subreddit that has made the most recent community post
const fetchSubredditPost = createAsyncThunk(
  "post/fetchSubredditPost",
  async (subreddit) => {
    try {
      const response = await fetch(`${API_ENDPOINT}/${subreddit}.json`);
      const posts = (await response.json()).data.children;

      return { posts };
    } catch (err) {
      console.error(err);
    }
  }
);

const fetchPostComments = createAsyncThunk(
  "post/fetchPostComments",
  async ({ subreddit, id }) => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}/${subreddit}/comments/${id}.json`
      );

      const postComments = await response.json();
      let [post, comments] = postComments;

      post = post.data.children[0].data;
      comments = comments.data.children.slice(0, 10);

      return { post, comments };
    } catch (err) {
      console.error(err);
    }
  }
);

export { fetchAllPosts, fetchSubredditPost, fetchPostComments };
