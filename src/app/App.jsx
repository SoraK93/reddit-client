import "./App.module.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Posts } from "../components/posts/Posts";
import { Community } from "../components/community/Community";
import { useEffect, useState } from "react";
import { getAllPosts } from "../api/allposts";

function App() {
  const [newPost, setNewPost] = useState([]);
  const [subreddit, setSubreddit] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await getAllPosts();
      setNewPost(response);
    };

    fetchPost();
  }, []);

  useEffect(() => {
    const sub = [];
    for (let post of newPost) {
      if (sub.length >= 10) break;
      const img = post.data.sr_detail;
      sub.push({
        thumbnail: {
          url:
            img.header_img ||
            img.icon_img ||
            img.community_icon?.replace(/&amp;/g, "&"),
        },
        subreddit: post.data.subreddit_name_prefixed,
      });
    }
    setSubreddit(sub);
  }, [newPost]);

  return (
    <>
      <Header />
      <main>
        {newPost.length > 0 && subreddit.length > 0 ? (
          <>
            <Posts newPost={newPost} sub={subreddit} />
            <Community community={subreddit} />
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
