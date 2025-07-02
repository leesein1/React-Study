import React, { useState } from "react";
import "./styles_hook.css";

export default function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => {
    setItem(item + 1);
  };
  const decrementItem = () => {
    setItem(item - 1);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>incre</button>
      <button onClick={decrementItem}>decre</button>
    </div>
  );
}
