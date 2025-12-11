import { useState } from "react";
import "./App.css";
import { Header } from "../pages/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
