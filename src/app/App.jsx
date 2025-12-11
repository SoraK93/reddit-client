import { useState } from "react";
import "./App.css";
import { Header } from "../pages/Header/Header";
import { Footer } from "../pages/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
