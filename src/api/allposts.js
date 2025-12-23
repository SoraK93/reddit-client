import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAPI } from "./fetchLinks";

const fetchAllPosts = createAsyncThunk("post/fetchAllPosts", async () => {
  // const response = await fetch(fetchAPI.allPostLink.data);
  const response = await fetch(fetchAPI.allPostLink.url);
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

// https://www.reddit.com/{subreddit}.json
const fetchSubredditPost = createAsyncThunk(
  "post/fetchSubredditPost",
  async (subreddit) => {
    // const response = await fetch(fetchAPI.subreddit);
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    console.log(subreddit);
    const posts = (await response.json()).data.children;
    return { posts };
  }
);

export { fetchAllPosts, fetchSubredditPost };
