import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINT } from "./fetchLinks";

// Gets 10 hot & recent posts
const fetchAllPosts = createAsyncThunk("post/fetchAllPosts", async () => {
  const response = await fetch(`${API_ENDPOINT}/all.json?sr_detail=1.json`);
  const posts = (await response.json()).data.children;

  const subreddit = [];

  for (let post of posts) {
    if (subreddit.length >= 10) break;
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
  }

  return { posts, subreddit };
});

// Gets the subreddit that has made the most recent community post
const fetchSubredditPost = createAsyncThunk(
  "post/fetchSubredditPost",
  async (subreddit) => {
    const response = await fetch(`${API_ENDPOINT}/${subreddit}.json`);
    console.log(subreddit);
    const posts = (await response.json()).data.children;
    return { posts };
  }
);

export { fetchAllPosts, fetchSubredditPost };

