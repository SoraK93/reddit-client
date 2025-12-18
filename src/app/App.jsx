import "./App.module.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Posts } from "../components/posts/Posts";
import { Community } from "../components/community/Community";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllPost,
  selectStatus,
  selectSubreddit,
} from "../features/postSlice/postSlice";
import { useEffect } from "react";
import { fetchAllPosts } from "../api/allposts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [])

  const newPost = useSelector(selectAllPost);
  const subreddit = useSelector(selectSubreddit);
  const status = useSelector(selectStatus);

  return (
    <>
      <Header />
      <main>
        {status === "fulfilled" ? (
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
