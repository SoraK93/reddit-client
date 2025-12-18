import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAPI } from "./fetchLinks";

const fetchAllPosts = createAsyncThunk("post/fetchAllPosts", async () => {
  const response = await fetch(fetchAPI.allPostLink.data);
  // const response = await fetch(fetchAPI.allPostLink.url);
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

export { fetchAllPosts };
