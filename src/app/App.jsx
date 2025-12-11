import { useState } from "react";
import "./App.css";
import { Header } from "../pages/Header/Header";
import { Footer } from "../pages/Footer/Footer";
import { Posts } from "../pages/posts/Posts";
import { Community } from "../pages/community/Community";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Posts />
        <Community />
      </main>
      <Footer />
    </>
  );
}

export default App;
