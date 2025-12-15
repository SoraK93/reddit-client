import "./App.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Posts } from "../components/posts/Posts";
import { Community } from "../components/community/Community";
import { useEffect, useState } from "react";
import { getAllPosts } from "../api/allposts";

function App() {
  const [newPost, setNewPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await getAllPosts();
      setNewPost(...newPost, response);
    };
    fetchPost();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Posts newPost={newPost} />
        <Community />
      </main>
      <Footer />
    </>
  );
}

export default App;
