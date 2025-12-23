import "./App.module.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Posts } from "../features/posts/Posts";
import { Community } from "../components/community/Community";
import { useDispatch, useSelector } from "react-redux";
import { selectStatus } from "../features/posts/postSlice/postSlice";
import { useEffect } from "react";
import { fetchAllPosts, fetchSubredditPost } from "../api/allposts";
import { useParams } from "react-router";

function App() {
  const dispatch = useDispatch();
  const { subreddit } = useParams();

  useEffect(() => {
    subreddit
      ? dispatch(fetchSubredditPost(subreddit))
      : dispatch(fetchAllPosts());
  }, [dispatch, subreddit]);

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
