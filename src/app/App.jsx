import "./App.module.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Posts } from "../features/posts/Posts";
import { Community } from "../features/community";
import { useDispatch, useSelector } from "react-redux";
import { selectStatus } from "../features/posts/postSlice/postSlice";
import { useEffect } from "react";
import {
  fetchAllPosts,
  fetchPostComments,
  fetchSubredditPost,
} from "../api/redditAPI";
import { useParams } from "react-router";

function App() {
  const dispatch = useDispatch();
  const { subreddit, id } = useParams();

  useEffect(() => {
    console.log(subreddit, id);
    if (subreddit && id) {
      dispatch(fetchPostComments({ subreddit, id }));
    } else if (subreddit) {
      dispatch(fetchSubredditPost(subreddit));
    } else {
      dispatch(fetchAllPosts());
    }
  }, [dispatch, subreddit, id]);

  const status = useSelector(selectStatus);

  return (
    <>
      <Header />
      <main>
        {status === "fulfilled" ? (
          <>
            <Posts />
            <Community />
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
