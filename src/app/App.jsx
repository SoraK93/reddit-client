import "./App.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Posts } from "../components/posts/Posts";
import { Community } from "../components/community/Community";

function App() {
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
