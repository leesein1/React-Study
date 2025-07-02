import React, { useEffect, useState } from "react";
import "./styles_hook.css";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    console.log("Y :", window.scrollY, "X : ", window.scrollX);
    setState({ y: window.scrollY, x: window.scrollX });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
};

export default function App() {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          color: y > 100 ? "red" : "blue",
        }}
      >
        스크롤 색상변경
      </h1>
    </div>
  );
}
